import React, { useState, useEffect } from 'react';
import { LOADED, LOADING } from '../../common/constants';
import FacebookStyle from '../../componentsLoader/PostLoader';
import { useStyles } from './styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getDocumentPostGlobal } from '../../firebase/data/getDocument';
import { useDispatch } from 'react-redux';
import PostGlobal from './PostGlobal';
import Post from './Post';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '@material-ui/core';

const PostsGlobal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState(null);
  const [state, setState] = useState({
    items: [],
    hasMore: false,
  });

  useEffect(() => {
    handleGetPosts();
  }, []);

  useEffect(() => {
    if (posts && posts.length > 20) {
      setState({
        hasMore: true,
        items: posts.slice(0, 20),
      });
    } else if (posts) {
      setState({
        hasMore: false,
        items: posts.slice(0, posts.length) || [],
      });
    }
  }, [posts]);

  const handleGetPosts = async () => {
    dispatch({
      type: LOADING,
    });
    const posts = await getDocumentPostGlobal('posts');
    if (posts && posts.length > 0) {
      setPosts(posts);
      dispatch({
        type: LOADED,
      });
    }
  };

  const fetchData = () => {
    console.log('ok');
    if (state.items.length >= posts?.length || 0) {
      setState({
        ...state,
        hasMore: false,
      });
      return;
    }

    if (posts && posts.length > 20) {
      setTimeout(() => {
        setState({
          ...state,
          items: state.items.concat(
            posts.slice(state.items.length, state.items.length + 20)
          ),
        });
      }, 500);
    } else {
      console.log(state.items);
      console.log(state.items.length, posts.length - state.items.length);
      setTimeout(() => {
        setState({
          ...state,
          items: state.items.concat(
            posts.slice(state.items.length, posts.length - state.items.length)
          ),
        });
      }, 500);
    }
  };

  const handleRenderPost = () => {
    return (
      <InfiniteScroll
        dataLength={state.items.length} //This is important field to render the next data
        // dataLength need to change so that next can fetchData
        next={fetchData}
        hasMore={state.hasMore}
        loader={<Typography>Loading ...</Typography>}
        endMessage={
          <div style={{ textAlign: 'center' }}>
            <Typography className={classes.proundText}>
              Made with <FavoriteIcon className={classes.proundIcon} /> by Gia
              An
            </Typography>
          </div>
        }
      >
        {state.items.map((post, index) => (
          <div key={index}>
            <Post post={post} />
          </div>
        ))}
      </InfiniteScroll>
    );
  };

  const handleNothing = () => {
    return (
      <>
        <FacebookStyle />
        <FacebookStyle />
        <FacebookStyle />
        <FacebookStyle />
      </>
    );
  };

  return <div>{posts ? handleRenderPost() : handleNothing()}</div>;
};

export default PostsGlobal;
