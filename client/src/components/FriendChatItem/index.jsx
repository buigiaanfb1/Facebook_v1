import React from "react";
import useStyles from "./style";
import haha from "../../common/images/haha.png";
import avatar from "../../common/images/avatar.png";
import Typography from "@material-ui/core/Typography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function FriendChatItem() {
  const classes = useStyles();

  const renderChatItemActive = (avatar, onlineStatus, name, lastChat, time) => {
    return (
      <>
        <div className={`${classes.chatItem} ${classes.chatActive}`}>
          <div className={classes.userAvatar}>
            <img className={classes.avatarImg} src={avatar} alt="user-avatar" />
            <div
              className={`${classes.status} ${
                onlineStatus ? classes.online : classes.offline
              }`}
            ></div>
          </div>
          <div className={classes.chatContent}>
            <div className={classes.contentTop}>
              <Typography className={classes.chatName}>{name}</Typography>
            </div>
            <div className={classes.contentBot}>
              <Typography className={classes.chatInfo}>{lastChat}</Typography>
              <Typography className={classes.chatTime}>
                <span>.</span> {time}
              </Typography>
            </div>
          </div>
          <div className={classes.chatItemAction}>
            <MoreHorizIcon />
          </div>
        </div>
      </>
    );
  };

  const renderChatItem = (avatar, onlineStatus, name, lastChat, time) => {
    return (
      <>
        <div className={`${classes.chatItem} `}>
          <div className={classes.userAvatar}>
            <img className={classes.avatarImg} src={avatar} alt="user-avatar" />
            <div
              className={`${classes.status} ${
                onlineStatus ? classes.online : classes.offline
              }`}
            ></div>
          </div>
          <div className={classes.chatContent}>
            <div className={classes.contentTop}>
              <Typography className={classes.chatName}>{name}</Typography>
            </div>
            <div className={classes.contentBot}>
              <Typography className={classes.chatInfo}>{lastChat}</Typography>
              <Typography className={classes.chatTime}>
                <span>.</span> {time}
              </Typography>
            </div>
          </div>
          <div className={classes.chatItemAction}>
            <MoreHorizIcon />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {renderChatItemActive(
        avatar,
        true,
        "Tony Kroos",
        "Goodnight bro!",
        "Hôm qua"
      )}
      {renderChatItem(haha, false, "Leo Messi", "Are you ok!", "Hồi trưa")}
    </>
  );
}

export default FriendChatItem;
