import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

const FriendsProfile = () => {
  const classes = useStyles();
  const friends = useSelector((state) => state.friendsProfileStore.friends);

  const handleRenderFriends = () => {
    if (friends && friends.length > 0) {
      return friends.map((item, index) => {
        return (
          <div className={classes.item}>
            <Link to={`/profile/${item.userID}`}>
              <div className={classes.rectImgContainer}>
                <img src={item.avatar} className={classes.rectImg} />
              </div>
              <Typography className={classes.friendName}>
                {item.username}
              </Typography>
            </Link>
          </div>
        );
      });
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.titleContainer1}>
          <Typography className={classes.title}>Bạn bè</Typography>
          <Typography className={classes.amountFriends}>
            {friends?.length || 0} người bạn
          </Typography>
        </div>
        <Typography className={classes.linkAll}>Xem tất cả bạn bè</Typography>
      </div>
      <div className={classes.friendsContainer}>{handleRenderFriends()}</div>
    </div>
  );
};

export default React.memo(FriendsProfile);
