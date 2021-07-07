import React, { useState } from "react";
import useStyles from "./style";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../../common/images/avatar.png";
import angry from "../../../common/images/angry.png";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import DoneIcon from "@material-ui/icons/Done";
function NickNameChange({ friendNickNameProps, userNickNameProps }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [friendNickName, setFriendNickName] = useState(friendNickNameProps);
  const [userNickName, setUserNickName] = useState(userNickNameProps);

  const [editing, setEditing] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChangeFriend = (event) => {
    setFriendNickName(event.target.value);
    setEditing(true);
  };

  return (
    <div>
      <div className={classes.child} onClick={handleOpen}>
        <CreateOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Chỉnh sửa biệt danh</Typography>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={`${classes.nickNameChangeModal} ${classes.allModal}`}>
          <div className={classes.headModal}>
            <Typography className={classes.title}>Biệt danh</Typography>
            <Icon className={classes.closeIcon} onClick={handleClose}>
              close
            </Icon>
          </div>
          <div className={classes.border}>
            <div className={classes.botNickName}>
              <div className={classes.friendInfo}>
                <Avatar className={classes.avatar} src={avatar} />
              </div>

              <div className={`${classes.changeField} `}>
                <input
                  className={classes.textField}
                  name="friendNickName"
                  defaultValue={friendNickName}
                  onChange={handleOnChangeFriend}
                />
                {editing ? (
                  <DoneIcon
                    className={classes.changeIcon}
                    onClick={() => {
                      setEditing(false);
                    }}
                  />
                ) : (
                  <CreateOutlinedIcon className={`${classes.changeIcon} `} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NickNameChange;
