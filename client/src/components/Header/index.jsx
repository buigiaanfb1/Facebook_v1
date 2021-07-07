import React from "react";
import { useStyles } from "./styles";
import avatar from "../../common/images/avatar.png";
import friends from "../../common/images/friends-header.png";
import watch from "../../common/images/watch-header.png";
import save from "../../common/images/save-header.png";
import market from "../../common/images/market-header.png";
import group from "../../common/images/group-header.png";
import mess from "../../common/images/mess.png";
import { Typography } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ marginTop: "1rem" }}></div>
      <div className={classes.wrapperItem}>
        <div className={classes.item}>
          <img src={avatar} className={classes.itemPicture} />
          <Typography className={classes.text}>Nguyễn Văn A</Typography>
        </div>
      </div>
      <div className={classes.wrapperItem}>
        <div className={classes.item}>
          <img src={friends} className={classes.itemPicture} />
          <Typography className={classes.text}>Tìm kiếm bạn bè</Typography>
        </div>
      </div>
      <div className={classes.wrapperItem}>
        <a href="/messenger" className={classes.item}>
          <img src={mess} className={classes.itemPicture} />
          <Typography className={classes.text}>Messenger</Typography>
        </a>
      </div>
      <div className={classes.wrapperItem}>
        <div className={classes.item}>
          <img src={group} className={classes.itemPicture} />
          <Typography className={classes.text}>Nhóm</Typography>
        </div>
      </div>
      <div className={classes.wrapperItem}>
        <div className={classes.item}>
          <img src={watch} className={classes.itemPicture} />
          <Typography className={classes.text}>Watch</Typography>
        </div>
      </div>
      <div className={classes.wrapperItem}>
        <div className={classes.item}>
          <img src={market} className={classes.itemPicture} />
          <Typography className={classes.text}>Marketplace</Typography>
        </div>
      </div>
      <div className={classes.wrapperItem}>
        <div className={classes.item}>
          <img src={save} className={classes.itemPicture} />
          <Typography className={classes.text}>Đã lưu</Typography>
        </div>
      </div>
    </div>
  );
};

export default Header;
