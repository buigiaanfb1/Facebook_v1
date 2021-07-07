import React, { useState } from "react";
// import useStyles from "./style";
import useStyles from "./style";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";

function ThemeChange() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const colorThemeList = [];

  for (let i = 0; i <= 30; i++) {
    colorThemeList.push(
      "#" + Math.floor(Math.random() * 16777215).toString(16)
    );
  }
  const renderColorTheme = () => {
    return colorThemeList.map((item) => {
      return (
        <div
          className={classes.colorItem}
          style={{ backgroundColor: item.toString() }}
        ></div>
      );
    });
  };

  return (
    <>
      <div className={classes.child} onClick={handleOpen}>
        <RadioButtonCheckedIcon className={classes.icon} />
        <Typography className={classes.text}>Đổi chủ đề</Typography>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={`${classes.themeChangeModal} ${classes.allModal}`}>
          <div className={classes.headModal}>
            <Typography className={classes.title}>Màu</Typography>
            <Icon className={classes.closeIcon} onClick={handleClose}>
              close
            </Icon>
          </div>
          <div className={classes.border}>
            <div className={classes.botThemeChange}>{renderColorTheme()}</div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ThemeChange;
