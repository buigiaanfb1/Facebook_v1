import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import useStyles from "./style";
function EmojiChange() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const emojiList = [
    128512, 128513, 128514, 128515, 128516, 128517, 128518, 128519, 128520,
    128521, 128522, 128523, 128524, 128525, 128526, 128527, 128528, 128529,
    128530, 128531, 128532, 128533, 128534, 128535, 128536, 128537, 128538,
    128539, 128540, 128541, 128542, 128543, 128544, 128545, 128546, 128547,
    128548, 128549, 128550, 128551, 128552, 128553, 128554, 128555, 128556,
    128557, 128558, 128559, 128560, 128561, 128562, 128563, 128564, 128565,
    128566, 128567, 128577, 128578, 128579, 128580, 129296, 129297, 129298,
    129299, 129300, 129301, 129312, 129313, 129314, 129315, 129316, 129317,
    129319, 129320, 129321, 129322, 129323, 129324, 129325, 129326, 129327,
    129488,
  ];

  const usedEmoji = [
    129319, 129320, 129321, 129322, 129323, 129324, 129325, 129326,
  ];

  const renderUsedEmoji = () => {
    if (usedEmoji) {
      return (
        <div className={classes.usedContainer}>
          <Typography>Đã dùng gần đây</Typography>
          <div className={classes.usedBorder}>
            {usedEmoji.map((item) => {
              return (
                <p
                  className={classes.iconItem}
                  onClick={handleClose}
                  key={item}
                >
                  {String.fromCodePoint(item)}
                </p>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  };

  const renderEmojeList = () => {
    return (
      <div className={classes.usedContainer}>
        <Typography>Emoji</Typography>
        <div className={classes.emojiList}>
          {emojiList.map((item) => {
            return (
              <p className={classes.iconItem} onClick={handleClose} key={item}>
                {String.fromCodePoint(item)}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={classes.child} onClick={handleOpen}>
        <ThumbUpAltIcon className={classes.icon} />
        <Typography className={classes.text}>
          Thay đổi biểu tượng cảm xúc
        </Typography>
      </div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={`${classes.emojiChangeModal} ${classes.allModal}`}>
          <div className={classes.headModal}>
            <Typography className={classes.title}>
              Biểu tượng cảm xúc
            </Typography>
            <Icon className={classes.closeIcon} onClick={handleClose}>
              close
            </Icon>
          </div>
          <div className={classes.border}>
            <div className={classes.botModal}>
              {renderUsedEmoji()}
              {renderEmojeList()}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EmojiChange;
