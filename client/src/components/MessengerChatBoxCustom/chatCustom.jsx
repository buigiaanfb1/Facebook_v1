import React from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Typography } from "@material-ui/core";
import useStyles from "./style";
import ThemeChange from "./childCustom/themeChange";
import EmojiChange from "./childCustom/emojiChange";
import NickNameChange from "./childCustom/nickNameChange";
import SearchInChat from "./childCustom/searchInChat";
function ChatCustom() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <>
        <div
          className={classes.listItem}
          onClick={() => {
            handleClick();
          }}
        >
          <Typography>Tùy chỉnh đoạn chat</Typography>
          {open ? <ExpandMore /> : <ExpandLess />}
        </div>
        <div className={`${classes.itemChild} ${open ? classes.expand : null}`}>
          <ThemeChange />
          <EmojiChange />
          <NickNameChange
            friendNickNameProps="Tony Kroos"
            userNickNameProps="Cristiano Ronaldo"
          />
          <SearchInChat />
        </div>
      </>
    </div>
  );
}

export default ChatCustom;
