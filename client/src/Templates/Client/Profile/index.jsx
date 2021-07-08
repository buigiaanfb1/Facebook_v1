import React, { useEffect, useState } from 'react';
import ProfileUp from './../../../components/ProfileUp';
import Content from './Content';
import { useDispatch } from 'react-redux';

import { useStyles } from './styles';

// BE (firebase)
import { projectFirestore } from '../../../firebase/config';
import { PROFILE_INFO } from '../../../common/constants';

const Profile = (props) => {
  const classes = useStyles();
  console.log('profile render');
  const id = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    // gán vào biến subcriber để khi component will unmount
    // sẽ đóng bandwidth không listen nữa tránh ảnh hưởng performance
    const subscriber = projectFirestore
      .collection('users')
      .doc(id)
      .collection('users')
      .onSnapshot((snap) => {
        let results = null;
        snap.docs.forEach((doc) => {
          // đợi dự liệu trả về timestamp server
          if (doc.data().createdAt) {
            results = { ...doc.data(), id: doc.id };
          }
        });
        dispatch({
          type: PROFILE_INFO,
          payload: results,
        });
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  return (
    <div style={{ marginTop: '56px' }}>
      <ProfileUp />
      <Content />
    </div>
  );
};

export default Profile;
