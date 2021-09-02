import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FacebookStyle from '../../componentsLoader/PostLoader';
import Post from './Post';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStyles } from './styles';

const Posts = () => {
  const classes = useStyles();

  const profilePosts = useSelector((state) => state.shareStore.profilePosts);
  const { id } = useParams();
  const [state, setState] = useState({
    items: [],
    hasMore: false,
  });

  useEffect(() => {
    if (profilePosts && profilePosts.length > 5) {
      setState({
        hasMore: true,
        items: profilePosts.slice(0, 5),
      });
    } else if (profilePosts) {
      setState({
        hasMore: false,
        items: profilePosts.slice(0, profilePosts.length) || [],
      });
    }
  }, [profilePosts]);

  const fetchData = () => {
    if (state.items.length >= profilePosts?.length || 0) {
      setState({
        ...state,
        hasMore: false,
      });
      return;
    }

    if (profilePosts && profilePosts.length > 5) {
      setTimeout(() => {
        setState({
          ...state,
          items: state.items.concat(
            profilePosts.slice(state.items.length, state.items.length + 5)
          ),
        });
      }, 500);
    } else {
      setTimeout(() => {
        setState({
          ...state,
          items: state.items.concat(
            profilePosts.slice(
              state.items.length,
              profilePosts.length - state.items.length
            )
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
          <Post key={post.id} post={post} profileID={id} />
        ))}
      </InfiniteScroll>
    );
  };

  const handleLoader = () => {
    return (
      <>
        <FacebookStyle />
        <FacebookStyle />
        <FacebookStyle />
      </>
    );
  };

  return profilePosts ? handleRenderPost() : handleLoader();
};

export default Posts;
