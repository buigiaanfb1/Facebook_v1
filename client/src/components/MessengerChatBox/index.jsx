import React from "react";
import useStyles from "./style";
import avatar from "../../common/images/avatar.png";
import Typography from "@material-ui/core/Typography";

function MessengerChatBox({ onlineStatus, userName }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.messengerChatBox}>
        <div className={`${classes.boxHead} ${classes.flexCenter}`}>
          <div className={classes.headLeft}>
            <div className={classes.infoBox}>
              <div className={classes.userAvatar}>
                <img
                  src={avatar}
                  alt="avata-img"
                  className={classes.avatarImg}
                />
                <div
                  className={`${classes.status} ${
                    onlineStatus ? classes.online : classes.offline
                  }`}
                ></div>
              </div>
              <div className={classes.userInfo}>
                <Typography>{userName}</Typography>
                <Typography>
                  {onlineStatus ? "Đang hoạt động" : null}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.headRight}>
            <div className={classes.chatAction}></div>
          </div>
        </div>
        <div className={classes.boxMid}>mid</div>
        <div className={classes.boxBot}>bot</div>
      </div>
    </>
  );
}

export default MessengerChatBox;
