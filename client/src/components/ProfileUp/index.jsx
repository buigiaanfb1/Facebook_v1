import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import addIcon from '../../common/images/addIcon.png';
import messenger from '../../common/images/messenger.png';
import editIcon from '../../common/images/editIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MESSAGES, PROFILE_INFO } from '../../common/constants';
import WallpaperVsAvatarModal from '../WallpaperVsAvatarModal';
import { setStorage } from '../../firebase/data/setStorage';
import { setCollection } from '../../firebase/data/setCollection';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import { toast } from 'react-toastify';
import WallpaperLoader from '../../componentsLoader/WallpaperLoader';
import AvatarLoader from '../../componentsLoader/AvatarLoader';
import FriendButton from './FriendButton';
import EditNameModal from './EditNameModal';
import Tabs from './Tabs';
import { sweetAlert } from '../../helpers/SweetAlert';

const ProfileUp = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.shareStore.profileInfo);
  const currentUser = useSelector((state) => state.userStore.currentUser);
  const [openPostPictureModal, setPostPictureModal] = useState({
    open: false,
    picture: null,
  });

  useEffect(() => {
    // gán vào biến subcriber để khi component will unmount
    // sẽ đóng bandwidth không listen nữa tránh ảnh hưởng performance
    const subscriber = projectFirestore
      .collection('users')
      .doc(id)
      .collection('users')
      .doc(id)
      .onSnapshot((doc) => {
        let data = { ...doc.data() };
        dispatch({
          type: PROFILE_INFO,
          payload: data,
        });
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  // mở Modal
  const handleOpenModalPicture = (picture, from) => {
    if (from === 'avatar') {
      setPostPictureModal({
        open: true,
        picture: picture,
      });
    } else {
      setPostPictureModal({
        open: true,
        picture: picture,
      });
    }
  };

  const handleOpenMessagePopup = () => {
    dispatch({
      type: OPEN_MESSAGES,
      payload: profileInfo,
    });
  };

  const listenModalChildren = (close) => {
    if (!close) {
      setPostPictureModal({
        open: false,
        picture: null,
      });
    }
  };

  const handleUploadWallpaper = async (e) => {
    const { uploadWallpaper } = setStorage();
    const { updateWallpaperFieldDoc } = setCollection('users');
    const file = e.target.files[0];
    if (file) {
      const { url } = await uploadWallpaper(currentUser.userID, file);

      await updateWallpaperFieldDoc(url, currentUser.userID);
      toast('Wow so easy !');
    }
  };

  const handleUploadAvatar = async (e) => {
    const { uploadAvatar } = setStorage();
    const { updateAvatarFieldDoc } = setCollection('users');
    const file = e.target.files[0];
    if (file) {
      const { url } = await uploadAvatar(currentUser.userID, file);

      await updateAvatarFieldDoc(url, currentUser.userID);
    }
  };

  const handleRenderDependOnUser = () => {
    if (currentUser && profileInfo?.userID === currentUser?.userID) {
      return (
        <>
          <button
            className={classes.addContainer}
            style={{ cursor: 'not-allowed' }}
          >
            <img src={addIcon} className={classes.iconRight} />
            <Typography className={classes.iconRightText}>
              Thêm vào tin
            </Typography>
          </button>
          <button className={classes.editContainer}>
            <img src={editIcon} className={classes.iconRight} />
            <Typography className={classes.iconRightText}>
              Chỉnh sửa trang cá nhân
            </Typography>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={currentUser ? handleOpenMessagePopup : handleNotification}
            className={classes.messageContainer}
          >
            <img src={messenger} className={classes.iconRight} alt="message" />
            <Typography className={classes.iconRightText}>Nhắn tin</Typography>
          </button>

          <FriendButton profileInfo={profileInfo} currentUser={currentUser} />
        </>
      );
    }
  };

  const handleNotification = () => {
    sweetAlert('Đăng nhập để nhắn tin.');
  };

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={2} md={1} sm={0}></Grid>
          <Grid item lg={8} md={10} sm={12} xs={12}>
            <div className={classes.wallpaperContainer}>
              {profileInfo?.wallpaper ? (
                <>
                  <img
                    src={profileInfo.wallpaper}
                    className={classes.wallpaper}
                    onClick={() =>
                      handleOpenModalPicture(profileInfo.wallpaper, 'wallpaper')
                    }
                    alt="wallpaper"
                  />
                  {currentUser?.userID === profileInfo?.userID ? (
                    <label for="uploadWallpaper">
                      <div className={classes.buttonEditWallpaper}>
                        <i className={classes.iconEditWallpaper}></i>
                        <Typography className={classes.editWallpaperText}>
                          {profileInfo?.wallpaper
                            ? 'Thay ảnh bìa'
                            : 'Thêm ảnh bìa'}
                        </Typography>
                      </div>
                      <input
                        type="file"
                        id="uploadWallpaper"
                        style={{ display: 'none' }}
                        accept="image/png, image/jpeg"
                        onChange={(e) => handleUploadWallpaper(e)}
                      />
                    </label>
                  ) : null}
                </>
              ) : (
                <div className={classes.wallpaper}>
                  <WallpaperLoader />
                </div>
              )}
            </div>
            <div className={classes.avatarVsButtonContainer}>
              <div className={classes.left}>
                <div className={classes.avatarContainer}>
                  {profileInfo?.avatar ? (
                    <>
                      <img
                        src={profileInfo.avatar}
                        className={classes.avatarBig}
                        onClick={() =>
                          handleOpenModalPicture(profileInfo?.avatar, 'avatar')
                        }
                        alt="avatar"
                      />
                      {currentUser?.userID === profileInfo?.userID ? (
                        <label for="uploadAvatar">
                          <div className={classes.containerEditAvatar}>
                            <i className={classes.iconEditAvatar}></i>
                          </div>
                          <input
                            type="file"
                            id="uploadAvatar"
                            style={{ display: 'none' }}
                            accept="image/png, image/jpeg"
                            onChange={(e) => handleUploadAvatar(e)}
                          />
                        </label>
                      ) : null}
                    </>
                  ) : (
                    <div className={classes.avatarBig}>
                      <AvatarLoader />
                    </div>
                  )}
                </div>
                <Typography className={classes.nameBig}>
                  {profileInfo?.username ? profileInfo.username : ''}
                </Typography>
                {currentUser?.userID === profileInfo?.userID && (
                  <EditNameModal profileInfo={profileInfo} />
                )}
              </div>
              <div className={classes.right}>
                <div className={classes.containerButtons}>
                  {handleRenderDependOnUser()}
                </div>
              </div>
            </div>
            <div className={classes.navigationContainer}>
              <Tabs />
            </div>
          </Grid>
          <Grid item lg={2} md={1} sm={0}></Grid>
        </Grid>
      </div>
      <WallpaperVsAvatarModal
        openModal={openPostPictureModal.open}
        picture={openPostPictureModal.picture}
        listenModalChildren={listenModalChildren}
      />
    </div>
  );
};

export default ProfileUp;
