import React from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Typography } from "@material-ui/core";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import useStyles from "./style";

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
          <div className={classes.child}>
            <RadioButtonCheckedIcon className={classes.icon} />
            <Typography className={classes.text}>Đổi chủ đề</Typography>
          </div>
          <div className={classes.child}>
            <ThumbUpAltIcon className={classes.icon} />
            <Typography className={classes.text}>
              Thay đổi biểu tượng cảm xúc
            </Typography>
          </div>
          <div className={classes.child}>
            <CreateOutlinedIcon className={classes.icon} />
            <Typography className={classes.text}>
              Chỉnh sửa biệt danh
            </Typography>
          </div>
          <div className={classes.child}>
            <SearchOutlinedIcon className={classes.icon} />
            <Typography className={classes.text}>
              Tìm kiếm trong cuộc trò chuyện
            </Typography>
          </div>
        </div>
      </>
    </div>
  );
}

export default ChatCustom;
