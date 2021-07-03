import React from 'react';
import ProfileUp from './../../../components/ProfileUp';
import Content from './Content';

import { useStyles } from './styles';

const Profile = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: '56px' }}>
      <ProfileUp />
      <Content />
    </div>
  );
};

export default Profile;
