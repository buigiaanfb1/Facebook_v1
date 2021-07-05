import React, { useState } from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import content1 from '../../common/images/test2.jpeg';
import content2 from '../../common/images/test1.jpeg';
import avatar from '../../common/images/avatar.png';
import addIcon from '../../common/images/addIcon.png';
import editIcon from '../../common/images/editIcon.png';
import { useDispatch, useSelector } from 'react-redux';
import { TAB_PROFILE } from '../../common/constants';
import { arrTab } from '../../common/TabsProfileArray';
import WallpaperVsAvatarModal from '../WallpaperVsAvatarModal';

const ProfileUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tabCon = useSelector((state) => state.shareStore.tabProfile);
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

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={2} md={1} sm={0}></Grid>
          <Grid item lg={8} md={10} sm={12}>
            <div
              className={classes.wallpaperContainer}
              onClick={handleOpenModalPicture}
            >
              <img src={content1} className={classes.wallpaper} />
            </div>
            <div className={classes.avatarVsButtonContainer}>
              <div className={classes.left}>
                <img
                  src={content2}
                  className={classes.avatarBig}
                  onClick={handleOpenModalPicture}
                />
                <Typography className={classes.nameBig}>An An</Typography>
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
