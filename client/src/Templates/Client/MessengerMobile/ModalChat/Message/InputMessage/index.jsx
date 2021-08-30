import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { setCollection } from '../../../../../../firebase/data/setCollection';
import { useSelector } from 'react-redux';
import { timestamp } from '../../../../../../firebase/config';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import $ from 'jquery';
import { v4 as uuidv4 } from 'uuid';
import { pictureIcon, likeIcon } from '../iconSvg';
import { setStorage } from '../../../../../../firebase/data/setStorage';

const InputMessage = ({ user }) => {
  const classes = useStyles();
  const { addMessageCollection } = setCollection('messages');
  const { uploadImagesMessage } = setStorage();
  const types = ['image/png', 'image/jpeg'];
  const currentUser = useSelector((state) => state.userStore.currentUser);
  const [state, setState] = useState({
    message: '',
    images: [],
  });

  // viết jquery trong useEffect giúp xoá state và biến dấu
  // enter k xuống hàng trong textarea nhanh hơn hàm onKeyDown
  useEffect(() => {
    $(`#textareaInputMessenger${user.userID}`).keypress(function (e) {
      if (e.keyCode != 13 && e.shiftKey == false) return;
      var msg = $(`#textareaInputMessenger${user.userID}`)
        .val()
        .replace(/\n/g, '');
      setState({
        message: '',
        images: [],
      });
      return false;
    });
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode != 13) return;
    if (state.message !== '' || state.images.length > 0) {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      message: value,
    });
  };

  const handleInputFiles = (e) => {
    // copy deep of state imageBlob
    let arrPicture = [...state.images];
    const files = e.target.files;
    // loop an object
    Object.keys(files).map((key) => {
      // init reader file
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        function () {
          //https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
          // convert image file to base64 string
          arrPicture.push(reader.result);
          setState({
            ...state,
            images: arrPicture,
          });
        },
        false
      );
      if (files[key]) {
        reader.readAsDataURL(files[key]);
      }
    });
  };

  const handleDetectPastePicture = (event) => {
    // copy deep of state imageBlob
    let arrPicture = [...state.images];
    // get Picture from clipboard
    let items = (event.clipboardData || event.originalEvent.clipboardData)
      .items;
    console.log(JSON.stringify(items)); // will give you the mime types
    for (let index in items) {
      // get one by one file
      let item = items[index];
      console.log(item);
      if (item.kind === 'file' && types.includes(item.type)) {
        let blob = item.getAsFile();
        let reader = new FileReader();
        reader.onload = function (event) {
          // add to array
          arrPicture.push(event.target.result);
          // re-render
          setState({
            ...state,
            images: arrPicture,
          });
        }; // data url!
        // This line will run before onload
        reader.readAsDataURL(blob);
      }
    }
  };

  const handleSubmit = async () => {
    let { userID, username, avatar, wallpaper } = currentUser;
    if (state.images.length === 0) {
      let info = {
        userID,
        username,
        avatar,
        wallpaper,
        content: state.message,
        images: null,
        createdAt: timestamp(),
      };
      await addMessageCollection(info, userID, user.userID, user);
    } else {
      const arrPicture = [];
      // lấy doc user ra
      for (const picture of state.images) {
        // upload ảnh lên
        const { url } = await uploadImagesMessage(
          userID,
          user.userID,
          picture,
          uuidv4()
        );
        arrPicture.push(url);
      }
      console.log(arrPicture);
      let info = {
        userID,
        username,
        avatar,
        wallpaper,
        content: state.message === '' ? null : state.message,
        images: arrPicture,
        createdAt: timestamp(),
      };
      await addMessageCollection(info, userID, user.userID, user);
    }
  };

  const handleDeletePicture = (index) => {
    let arrPicture = [...state.images];
    arrPicture.splice(index, 1);
    setState({
      ...state,
      images: arrPicture,
    });
  };

  const handleRenderImageUnsent = () => {
    return state.images.map((image, index) => {
      return (
        <div className={classes.containerImage} key={index}>
          <img src={image} className={classes.imageUnsent} alt="unsent pic" />
          <div
            className={classes.containerCloseIcon}
            onClick={() => handleDeletePicture(index)}
          >
            <i className={classes.closeIcon}></i>
          </div>
        </div>
      );
    });
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
    <div className={classes.inputContainer} id={`inputContainer${user.userID}`}>
      <label for="uploadPictureMessage">
        <div className={classes.iconInput}>{pictureIcon}</div>
        <input
          type="file"
          multiple
          id="uploadPictureMessage"
          style={{ display: 'none' }}
          accept="image/png, image/jpeg"
          onChange={(e) => handleInputFiles(e)}
        />
      </label>
      <div style={{ padding: '0 0.5rem 0 0.5rem', flexGrow: '3' }}>
        {state.images.length > 0 && (
          <div className={classes.containerImagesUnsent}>
            {handleRenderImageUnsent()}
          </div>
        )}
        <TextareaAutosize
          id={`textareaInputMessenger${user.userID}`}
          maxRows={4}
          aria-label="maximum height"
          placeholder="Aa"
          className={classes.textarea}
          value={state.message}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onPaste={handleDetectPastePicture}
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
