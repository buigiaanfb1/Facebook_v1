import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { setCollection } from '../../../../firebase/data/setCollection';
import { useSelector } from 'react-redux';
import { timestamp } from '../../../../firebase/config';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import $ from 'jquery';
import { pictureIcon, stickerIcon, gifIcon, likeIcon } from '../iconSvg';

const InputMessage = ({ user }) => {
  const classes = useStyles();
  const { addMessageCollection } = setCollection('messages');
  const currentUser = useSelector((state) => state.userStore.currentUser);
  const [state, setState] = useState('');

  // viết jquery trong useEffect giúp xoá state và biến dấu
  // enter k xuống hàng trong textarea nhanh hơn hàm onKeyDown
  useEffect(() => {
    $(`#textareaInputMessage${user.userID}`).keypress(function (e) {
      if (e.keyCode != 13 && e.shiftKey == false) return;
      var msg = $(`#textareaInputMessage${user.userID}`)
        .val()
        .replace(/\n/g, '');
      setState('');
      return false;
    });
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode != 13) return;
    if (state !== '') {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setState(value);
  };

  const handleSubmit = async () => {
    let { userID, username, avatar, wallpaper } = currentUser;
    let info = {
      userID,
      username,
      avatar,
      wallpaper,
      content: state,
      createdAt: timestamp(),
    };
    await addMessageCollection(info, userID, user.userID);
  };

  const handleSendLike = async () => {
    let { userID, username, avatar, wallpaper } = currentUser;
    let info = {
      userID,
      username,
      avatar,
      wallpaper,
      createdAt: timestamp(),
      like: true,
    };
    await addMessageCollection(info, userID, user.userID);
  };

  return (
    <div className={classes.inputContainer}>
      <div className={classes.iconInput}>{pictureIcon}</div>
      <div className={classes.iconInput}>{stickerIcon}</div>
      <div className={classes.iconInput}>{gifIcon}</div>
      <div style={{ padding: '0 0.5rem 0 0.5rem' }}>
        <TextareaAutosize
          id={`textareaInputMessage${user.userID}`}
          maxRows={4}
          aria-label="maximum height"
          placeholder="Aa"
          className={classes.textarea}
          value={state}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          // onKeyDown={handleDetectEnter}
        />
      </div>
      <div className={classes.iconInput} onClick={handleSendLike}>
        {likeIcon}
      </div>
    </div>
  );
};

export default InputMessage;
