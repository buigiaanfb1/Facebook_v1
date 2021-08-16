import React from 'react';
import FriendInvited from '../../../../components/FriendInvited';
import { useSelector } from 'react-redux';
import { useStyles } from '../styles';

const FriendsInvited = () => {
  const classes = useStyles();
  const incoming = useSelector((state) => state.friendsStore.incoming);
  const currentUser = useSelector((state) => state.userStore.currentUser);

  // pseudo element Array.from(Array(10).keys())
  const handleRenderFriendInvited = () => {
    if (incoming && incoming.incoming.length > 0) {
      return incoming.incoming.map((item, index) => {
        return (
          <FriendInvited key={index} friend={item} currentUser={currentUser} />
        );
      });
    }
  };
  return (
    <div className={classes.containerItems}>{handleRenderFriendInvited()}</div>
  );
};

export default FriendsInvited;
