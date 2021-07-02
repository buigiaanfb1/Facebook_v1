import React from 'react';
import ProfileUp from './../../../components/ProfileUp';
import ProfileDown from './../../../components/ProfileDown';
import IntroductionProfile from './../../../components/IntroductionProfile';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';

const Profile = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: '56px' }}>
      <ProfileUp />
      <ProfileDown />
    </div>
  );
};

export default Profile;
