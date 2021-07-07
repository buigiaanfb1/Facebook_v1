import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Typography } from "@material-ui/core";
import useStyles from "./style";
function SearchInChat() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.child}>
        <SearchOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>
          Tìm kiếm trong cuộc trò chuyện
        </Typography>
      </div>
    </div>
  );
}

export default SearchInChat;
