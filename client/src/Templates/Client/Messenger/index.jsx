import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import Typography from "@material-ui/core/Typography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import VideoCallRoundedIcon from "@material-ui/icons/VideoCallRounded";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import SearchBar from "../../../components/SearchBar";
import FriendChatItem from "../../../components/FriendChatItem";
import MessengerChatBox from "../../../components/MessengerChatBox";
import Avatar from "../../../common/images/avatar.png";
import ChatBoxCustom from "../../../components/MessengerChatBoxCustom";
function Messenger() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.messenger} container>
        <Grid className={classes.messLeft} item xs={3}>
          <div className={classes.leftTop}>
            <Typography className={classes.topTitle}>Chat</Typography>
            <div className={classes.leftAction}>
              <div className={classes.actionIcon}>
                <MoreHorizIcon />
              </div>
              <div className={classes.actionIcon}>
                <VideoCallRoundedIcon />
              </div>
              <div className={classes.actionIcon}>
                <LaunchRoundedIcon />
              </div>
            </div>
          </div>
          <div className={classes.leftSearch}>
            <SearchBar />
          </div>
          <div className={classes.leftChatList}>
            <FriendChatItem />
          </div>
        </Grid>
        <Grid className={classes.messCenter} item xs={6}>
          <MessengerChatBox onlineStatus={true} userName="Tony Kroos" />
        </Grid>
        <Grid className={classes.messRight} item xs={3}>
          <div className={classes.chatBoxInfo}>
            <div className={classes.userInfo}>
              <img
                src={Avatar}
                alt="user-avatar"
                className={classes.userAvatarImg}
              />
              <Typography className={classes.userName}>Tony Kroos</Typography>
              <Typography className={classes.onlineStatus}>Online</Typography>
            </div>
            <div className={classes.chatBoxCustom}>
              <ChatBoxCustom />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Messenger;
