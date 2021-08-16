import { Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addFriend from '../../../common/images/addFriend.png';
import unRequestedFriend from '../../../common/images/unRequestedFriend.png';
import acceptFriend from '../../../common/images/acceptFriend.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import { setCollection } from '../../../firebase/data/setCollection';
import { FRIENDS_INITIAL } from '../../../common/constants';
import { getSubDocument } from '../../../firebase/data/getDocument';
import DropdownTools from './DropdownTools';

let alreadyFriendsDropDown = [
  { icon: unRequestedFriend, label: 'Huỷ kết bạn', char: 'unfriend' },
];

let incomingDropDown = [
  { label: 'Xác nhận', char: 'acceptInvited' },
  { label: 'Xoá lời mời', char: 'deleteInvited' },
];

const FriendButton = ({ profileInfo, currentUser }) => {
  const classes = useStyles();
  const {
    addRequestFriend,
    removeRequestFriend,
    addFriendToBothUser,
    unfriendToBothUser,
  } = setCollection('users');
  // get currentUser to check if have add friend this profile
  const requested = useSelector((state) => state.friendsStore.requested);
  const incoming = useSelector((state) => state.friendsStore.incoming);
  const friends = useSelector((state) => state.friendsStore.friends);
  const dispatch = useDispatch();
  console.log('render');
  const [state, setState] = useState({
    loading: false,
    icon: addFriend,
    label: 'Thêm bạn bè',
    status: 'none',
    dropDownContent: null,
    openDropDown: false,
  });

  useEffect(() => {
    handleCheckButton();
  }, [profileInfo, currentUser]);

  const handleSetState = () => {};

  // check user to setState
  const handleCheckButton = () => {
    let test = 0;
    if (profileInfo && currentUser) {
      if (friends && friends.friends.length > 0) {
        console.log('Vo friend');
        const index = friends.friends.findIndex((user, index) => {
          return user.userID === profileInfo.userID;
        });
        console.log(index);
        if (index >= 0) {
          test = 1;
          setState({
            ...state,
            icon: acceptFriend,
            label: 'Bạn bè',
            status: 'friend',
            dropDownContent: alreadyFriendsDropDown,
          });
        }
      }
      if (incoming && incoming.incoming.length > 0 && test === 0) {
        console.log('Vo incoming');
        const index = incoming.incoming.findIndex((user, index) => {
          // kiểm tra xem profile đang xem có trùng id user.userID(là của currentUser)
          // Là check xem trong incoming của currentUser có tồn tại profileInfo
          // của cái đang view không nếu có thì có nghĩa là đang xem thằng
          // đang gửi lời mời kết bạn cho mình nên sẽ là Phản hồi
          return user.userID === profileInfo.userID;
        });
        if (index >= 0) {
          test = 1;
          setState({
            ...state,
            icon: acceptFriend,
            label: 'Phản hồi',
            dropDownContent: incomingDropDown,
          });
        }
      }
      if (requested && requested.requested.length > 0 && test === 0) {
        console.log('Vo requested');
        console.log(test);

        const index = requested.requested.findIndex((user, index) => {
          // kiểm tra xem profile đang xem có trùng id user.userID(là của currentUser)
          // Nghĩa là nếu tìm ra được thì chứng tỏ mình đang gửi lời mời
          // kết bạn cho profile đang view nên sẽ là Huỷ lời mời
          return user.userID === profileInfo.userID;
        });
        if (index >= 0) {
          test = 1;
          setState({
            ...state,
            icon: unRequestedFriend,
            status: 'unInvited',
            label: 'Huỷ lời mời',
          });
        }
      }
    }
  };

  const handleClick = async () => {
    if (state.status === 'none') {
      console.log('addRequestFriend ');
      setState({
        ...state,
        loading: true,
      });
      await addRequestFriend(
        profileInfo,
        'friendsRequested',
        currentUser.userID,
        currentUser,
        'friendsIncoming',
        profileInfo.userID
      );
      setState({
        ...state,
        loading: false,
        icon: unRequestedFriend,
        label: 'Huỷ lời mời',
        dropDownContent: null,
        status: 'unInvited',
      });
    } else if (state.status === 'unInvited') {
      console.log('removeRequestFriend ');
      setState({
        ...state,
        loading: true,
      });
      await removeRequestFriend(
        profileInfo,
        'friendsRequested',
        currentUser.userID,
        currentUser,
        'friendsIncoming',
        profileInfo.userID
      );
      setState({
        ...state,
        loading: false,
        icon: addFriend,
        label: 'Thêm bạn bè',
        dropDownContent: null,
        status: 'none',
      });
    }
    getFriendCollection();
  };

  const handleDeleteInvitedFromChild = async () => {
    console.log('handleDeleteInvitedFromChild ');
    setState({
      ...state,
      loading: true,
    });
    await removeRequestFriend(
      // đổi vị trí là sai ngay do bên Firebase setup như cc
      currentUser,
      'friendsRequested',
      profileInfo.userID,
      profileInfo,
      'friendsIncoming',
      currentUser.userID
    );
    setState({
      ...state,
      loading: false,
      icon: addFriend,
      label: 'Thêm bạn bè',
      dropDownContent: null,
    });
    getFriendCollection();
  };

  const handleAcceptInvitedFromChild = async () => {
    console.log('handleAcceptInvitedFromChild');
    setState({
      ...state,
      loading: true,
    });
    await handleDeleteInvitedFromChild();
    await addFriendToBothUser(
      currentUser,
      'friends',
      currentUser.userID,
      profileInfo,
      'friends',
      profileInfo.userID
    );
    setState({
      ...state,
      loading: false,
      icon: acceptFriend,
      label: 'Bạn bè',
      status: 'friend',
      dropDownContent: alreadyFriendsDropDown,
    });
    getFriendCollection();
  };

  const handleUnfriendFromChild = async () => {
    console.log('handleUnfriendFromChild');
    setState({
      ...state,
      loading: true,
    });

    await unfriendToBothUser(
      currentUser,
      'friends',
      currentUser.userID,
      profileInfo,
      'friends',
      profileInfo.userID
    );

    setState({
      ...state,
      loading: false,
      icon: addFriend,
      label: 'Thêm bạn bè',
      status: 'none',
      dropDownContent: null,
    });
    getFriendCollection();
  };

  const getFriendCollection = async (userID) => {
    // Get new info from firebase
    const friendsRequested = await getSubDocument(
      'users',
      'friendsRequested',
      currentUser.userID
    );
    const friendsIncoming = await getSubDocument(
      'users',
      'friendsIncoming',
      currentUser.userID
    );
    const friends = await getSubDocument(
      'users',
      'friends',
      currentUser.userID
    );
    dispatch({
      type: FRIENDS_INITIAL,
      payload: { friends, friendsIncoming, friendsRequested },
    });
  };

  const handleRenderButton = () => {
    return !state.loading ? (
      <>
        {state.dropDownContent ? (
          <DropdownTools
            icon={state.icon}
            label={state.label}
            dropDownContent={state.dropDownContent}
            handleDeleteInvitedFromChild={handleDeleteInvitedFromChild}
            handleAcceptInvitedFromChild={handleAcceptInvitedFromChild}
            handleUnfriendFromChild={handleUnfriendFromChild}
          />
        ) : (
          // Không có content drop down nghĩa là chỉ có thêm bạn bè
          // hoặc là huỷ lời mời thì xử lí bằng onClick cho nhanh
          // còn có thì truyền xuống Dropdowntools xử lí
          <div
            onClick={handleClick}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img
              src={state.icon}
              className={classes.iconRight}
              alt="Add friend"
            />
            <Typography className={classes.iconRightText}>
              {state.label}
            </Typography>
          </div>
        )}
      </>
    ) : (
      <>
        <CircularProgress color="inherit" size={16} />
        <Typography className={classes.iconRightText}>{state.label}</Typography>
      </>
    );
  };

  return requested && profileInfo ? (
    <button className={classes.addFriendContainer}>
      {handleRenderButton()}
    </button>
  ) : null;
};

export default FriendButton;
