import React, { useState } from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import content1 from '../../common/images/test2.jpeg';
import addIcon from '../../common/images/addIcon.png';
import editIcon from '../../common/images/editIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { TAB_PROFILE } from '../../common/constants';
import { arrTab } from '../../common/TabsProfileArray';
import WallpaperVsAvatarModal from '../WallpaperVsAvatarModal';
import { setStorage } from '../../firebase/data/setStorage';
import { setCollection } from '../../firebase/data/setCollection';

const ProfileUp = () => {
  console.log('ProfileUp render');
  const classes = useStyles();
  const dispatch = useDispatch();
  const tabCon = useSelector((state) => state.shareStore.tabProfile);
  const profileInfo = useSelector((state) => state.shareStore.profileInfo);
  const currentUser = useSelector((state) => state.shareStore.currentUser);
  const [openPostPictureModal, setPostPictureModal] = useState({
    open: false,
    picture: null,
  });

  // mở Modal
  const handleOpenModalPicture = (picture, from) => {
    console.log(openPostPictureModal.open);
    if (from === 'avatar') {
      setPostPictureModal({
        open: true,
        picture: picture ? picture : avatarDefault,
      });
    } else {
      setPostPictureModal({
        open: true,
        picture: picture ? picture : wallpaperDefault,
      });
    }
  };

  const listenModalChildren = (close) => {
    if (!close) {
      setPostPictureModal({
        open: false,
        picture: null,
      });
    }
  };

  const handleChangeTab = (tabName) => {
    dispatch({
      type: TAB_PROFILE,
      payload: tabName,
    });
  };

  const handleRenderTabs = () => {
    // arrTab is import from common folder
    return arrTab.map((tab, index) => {
      return (
        <div
          className={`${
            tabCon === tab.cons ? classes.itemSelected : classes.item
          }`}
          key={index}
          onClick={() => handleChangeTab(tab.cons)}
        >
          <Typography
            className={`${
              tabCon === tab.cons ? classes.itemTextSelected : classes.itemText
            }`}
          >
            {tab.view}
          </Typography>
        </div>
      );
    });
  };

  const handleUploadWallpaper = async (e) => {
    const { uploadWallpaper } = setStorage();
    const { updateWallpaperFieldDoc } = setCollection('users');
    const file = e.target.files[0];
    if (file) {
      const { url } = await uploadWallpaper(currentUser.userID, file);
      console.log(url);
      await updateWallpaperFieldDoc(url, currentUser.userID);
    }
  };

  const handleUploadAvatar = async (e) => {
    const { uploadAvatar } = setStorage();
    const { updateAvatarFieldDoc } = setCollection('users');
    const file = e.target.files[0];
    if (file) {
      const { url } = await uploadAvatar(currentUser.userID, file);
      console.log(url);
      await updateAvatarFieldDoc(url, currentUser.userID);
    }
  };

  const avatarDefault =
    'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default%2Favatar-default.jpeg?alt=media&token=a1f34410-3760-4666-a3b0-e59e8444f8b0';

  const wallpaperDefault =
    'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default%2FdefaultWallpaper.jpeg?alt=media&token=eafdf402-296d-4eb6-b14a-3d814fc3d905';

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={2} md={1} sm={0}></Grid>
          <Grid item lg={8} md={10} sm={12}>
            {profileInfo ? (
              <>
                <div className={classes.wallpaperContainer}>
                  <img
                    src={
                      profileInfo.wallpaper
                        ? profileInfo.wallpaper
                        : wallpaperDefault
                    }
                    className={classes.wallpaper}
                    onClick={() =>
                      handleOpenModalPicture(profileInfo.wallpaper, 'wallpaper')
                    }
                  />
                  <label for="uploadWallpaper">
                    <div className={classes.buttonEditWallpaper}>
                      <i className={classes.iconEditWallpaper}></i>
                      <Typography className={classes.editWallpaperText}>
                        {profileInfo.wallpaper
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
                </div>
                <div className={classes.avatarVsButtonContainer}>
                  <div className={classes.left}>
                    <div className={classes.avatarContainer}>
                      <img
                        src={
                          profileInfo.avatar
                            ? profileInfo.avatar
                            : avatarDefault
                        }
                        className={classes.avatarBig}
                        onClick={() =>
                          handleOpenModalPicture(profileInfo.avatar, 'avatar')
                        }
                      />
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
                    </div>
                    <Typography className={classes.nameBig}>
                      {profileInfo.username ? profileInfo.username : ''}
                    </Typography>
                  </div>
                  <div className={classes.right}>
                    <div className={classes.containerButtons}>
                      <button className={classes.addContainer}>
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
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ''
            )}
            <div className={classes.navigationContainer}>
              {handleRenderTabs()}
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
