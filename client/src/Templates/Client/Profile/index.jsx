import React, { useEffect, useState } from 'react';
import ProfileUp from './../../../components/ProfileUp';
import Content from './Content';
import { getDocument } from '../../../firebase/data/getDocument';
import { useDispatch } from 'react-redux';

import { useStyles } from './styles';

// BE (firebase)
import { getUser } from '../../../firebase/data/currentUser';
import { USER_INFO } from '../../../common/constants';

const Profile = (props) => {
  const classes = useStyles();
  console.log('profile render');
  const id = props.match.params.id;
  // const dispatch = useDispatch();
  // const [info, setInfo] = useState(null);
  // console.log('Profile render');

  // useEffect(() => {
  //   getUserProfile();
  // }, []);

  // const getUserProfile = async () => {
  //   const res = await getDocument('users', id);
  //   if (res) {
  //     dispatch({
  //       type: USER_INFO,
  //       payload: res,
  //     });
  //     setInfo(res);
  //   }
  // };

  return (
    <div style={{ marginTop: '56px' }}>
      <ProfileUp />
      <Content />
    </div>
  );
};

export default Profile;
