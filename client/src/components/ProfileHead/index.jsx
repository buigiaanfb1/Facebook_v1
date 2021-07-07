import React from "react";
import useStyles from "./style";
import Angry from "../../common/images/angry.png";
import Cover from "../../common/images/content1.jpeg";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CreateIcon from "@material-ui/icons/Create";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function ProfileHead() {
  const classes = useStyles();
  return (
    <div className={classes.profileHead}>
      <div className={`${classes.container} ${classes.columnCenter}`}>
        <div className={classes.profilePicture}>
          <div className={classes.cover}>
            <img className={classes.coverImg} src={Cover} alt="cover-picture" />
            <Typography className={classes.changeCover}>
              <CameraAltIcon color="success" className={classes.cameraIcon} />
              Chỉnh sửa ảnh bìa
            </Typography>
          </div>
          <div className={classes.avatar}>
            <img className={classes.avatarImg} src={Angry} alt="user-avata" />
            <a className={classes.changeAvatar} href="#">
              <CameraAltIcon />
            </a>
          </div>
        </div>
        <div className={`${classes.profileText} ${classes.columnCenter}`}>
          <Typography className={classes.profileName}>
            Cristiano Ronaldo
          </Typography>
          <Typography className={classes.profileIntro}>
            Welcome to the OFFICIAL Facebook page of Cristiano Ronaldo.
          </Typography>
          <Typography className={classes.changeInfo}>Chỉnh sửa</Typography>
        </div>
        <div className={classes.profileNav}>
          <Typography className={`${classes.navItem} ${classes.itemActive}`}>
            Bài viết
          </Typography>
          <Typography className={classes.navItem}>Giới thiệu</Typography>
          <Typography className={classes.navItem}>
            Bạn bè <span className={classes.friendNumber}>260</span>
          </Typography>
          <Typography className={classes.navItem}>
            Xem thêm <ArrowDropDownIcon className={classes.dropIcon} />
          </Typography>
          <Typography className={` ${classes.navAdd} ${classes.navAction}`}>
            <AddCircleOutlineIcon className={classes.addIcon} />
            Thêm vào tin
          </Typography>
          <Typography className={`${classes.navItem} ${classes.navAction}`}>
            <CreateIcon className={classes.fixIcon} />
            Chỉnh sửa trang cá nhân
          </Typography>
          <Typography className={`${classes.navItem} ${classes.navAction}`}>
            <MoreHorizIcon />
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ProfileHead;
