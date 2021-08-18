import React, { useEffect, useState } from 'react';
import ProfileUp from './../../../components/ProfileUp';
import Content from './Content';
import { useDispatch, useSelector } from 'react-redux';

import {
  CLEAR_PROFILE,
  FRIENDS_PROFILE,
  PROFILE_POSTS,
} from '../../../common/constants';
import {
  getDocumentPostProfile,
  getSubDocument,
} from '../../../firebase/data/getDocument';

const Profile = (props) => {
  console.log('profile render');
  const id = props.match.params.id;
  const postUploadStatus = useSelector(
    (state) => state.shareStore.postUploadStatus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getUserPosts();
    getFriendsProfile();
    return () => {
      dispatch({
        type: CLEAR_PROFILE,
      });
    };
  }, []);

  useEffect(() => {
    if (postUploadStatus && postUploadStatus !== 0) {
      console.log('@@');
      getUserPosts();
    }
  }, [postUploadStatus]);

  const getUserPosts = async () => {
    const res = await getDocumentPostProfile('user-posts', 'posts', id);
    dispatch({
      type: PROFILE_POSTS,
      payload: res,
    });
  };

  const getFriendsProfile = async () => {
    const res = await getSubDocument('users', 'friends', id);
    dispatch({
      type: FRIENDS_PROFILE,
      payload: res,
    });
  };

  return (
    <div style={{ marginTop: '56px' }}>
      <ProfileUp />
      <Content />
    </div>
  );
};

export default Profile;
