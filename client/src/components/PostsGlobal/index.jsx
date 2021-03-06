import React, { useState, useEffect, useRef } from 'react';
import { LOADED, LOADING } from '../../common/constants';
import FacebookStyle from '../../componentsLoader/PostLoader';
import { useStyles } from './styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';
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

  useEffect(() => {
    const subscriber = projectFirestore
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((doc) => {
        let postsRealtime = [];
        doc.forEach(function (doc) {
          let id = doc.id;
          let data = { ...doc.data(), id };
          postsRealtime.push(data);
        });
        setPosts(postsRealtime);
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
    if (posts && posts.length > 0) {
      if (first.current) {
        let postsCopy = [...posts];
        if (postsCopy && postsCopy.length > 5) {
          setState({
            hasMore: true,
            items: postsCopy.slice(0, 5),
          });
          first.current = false;
        } else if (postsCopy) {
          setState({
            hasMore: false,
            items: postsCopy.slice(0, postsCopy.length) || [],
          });
          first.current = false;
        }
      } else {
        let postsCopy = [...posts];
        if (postsCopy && postsCopy.length > 5) {
          setState({
            hasMore: true,
            items: [...state.items],
          });
        } else if (postsCopy) {
          setState({
            hasMore: false,
            items: postsCopy.slice(0, postsCopy.length) || [],
          });
        }
      }
    }
  }, [posts]);

  const fetchData = () => {
    if (posts) {
      let postsCopy = [...posts];
      // loaded.current = true;
      if (state.items.length >= posts.length || 0) {
        setState({
          ...state,
          hasMore: false,
        });
        return;
      }

      if (postsCopy && postsCopy.length > 5) {
        setTimeout(() => {
          setState({
            ...state,
            items: state.items.concat(
              postsCopy.slice(state.items.length, state.items.length + 5)
            ),
          });
        }, 500);
      } else {
        setTimeout(() => {
          setState({
            ...state,
            items: state.items.concat(
              postsCopy.slice(
                state.items.length,
                postsCopy.length - state.items.length
              )
            ),
          });
        }, 500);
      }
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
