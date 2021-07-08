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

const ProfileUp = () => {
  console.log('ProfileUp render');
  const classes = useStyles();
  const dispatch = useDispatch();
  const tabCon = useSelector((state) => state.shareStore.tabProfile);
  const profileInfo = useSelector((state) => state.shareStore.profileInfo);
  const [openPostPictureModal, setPostPictureModal] = useState(false);

  // mở Modal
  const handleOpenModalPicture = () => {
    setPostPictureModal({
      openPostPictureModal: true,
    });
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
                <div
                  className={classes.wallpaperContainer}
                  onClick={handleOpenModalPicture}
                >
                  <img
                    src={
                      profileInfo.wallpaper
                        ? profileInfo.wallpaper
                        : wallpaperDefault
                    }
                    className={classes.wallpaper}
                  />
                </div>
                <div className={classes.avatarVsButtonContainer}>
                  <div className={classes.left}>
                    <img
                      src={
                        profileInfo.avatar ? profileInfo.avatar : avatarDefault
                      }
                      className={classes.avatarBig}
                      onClick={handleOpenModalPicture}
                    />
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
        openModal={openPostPictureModal}
        picture={content1}
      />
    </div>
  );
};

export default ProfileUp;