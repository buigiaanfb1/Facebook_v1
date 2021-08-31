import React, { useState, useEffect, useRef } from 'react';
import { LOADED, LOADING } from '../../common/constants';
import FacebookStyle from '../../componentsLoader/PostLoader';
import { useStyles } from './styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getDocumentPostGlobal } from '../../firebase/data/getDocument';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '@material-ui/core';
import { projectFirestore } from '../../firebase/config';

const PostsGlobal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const first = useRef(true);
  const [posts, setPosts] = useState(null);
  const [state, setState] = useState({
    items: [],
    hasMore: false,
  });

  // useEffect(() => {
  //   if (postUploadStatus && postUploadStatus !== 0) {
  //     console.log('@@');
  //     setTimeout(() => {
  //       handleGetPosts();
  //     }, 10000);
  //   }
  // }, [postUploadStatus]);

  // useEffect(() => {
  //   handleGetPosts();
  // }, []);

  useEffect(() => {
    const subscriber = projectFirestore
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((doc) => {
        let posts = [];
        doc.forEach(function (doc) {
          let id = doc.id;
          let data = { ...doc.data(), id };
          posts.push(data);
        });
        setPosts(posts);
      });
    if (first) {
      dispatch({
        type: LOADING,
      });
    }
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  useEffect(() => {
    if (posts && posts.length > 0) {
      dispatch({
        type: LOADED,
      });
    }
    if (first.current) {
      if (posts && posts.length > 5) {
        setState({
          hasMore: true,
          items: posts.slice(0, 5),
        });
        first.current = false;
      } else if (posts) {
        setState({
          hasMore: false,
          items: posts.slice(0, posts.length) || [],
        });
        first.current = false;
      }
    } else {
      if (posts && posts.length > 5) {
        setState({
          hasMore: true,
          items: [posts[0], ...state.items],
        });
      } else if (posts) {
        setState({
          hasMore: false,
          items: posts.slice(0, posts.length) || [],
        });
      }
    }
  }, [posts]);

  const fetchData = () => {
    // loaded.current = true;
    if (state.items.length >= posts.length || 0) {
      setState({
        ...state,
        hasMore: false,
      });
      return;
    }

    if (posts && posts.length > 5) {
      setTimeout(() => {
        setState({
          ...state,
          items: state.items.concat(
            posts.slice(state.items.length, state.items.length + 5)
          ),
        });
      }, 500);
    } else {
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
          <div key={post.id}>
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
