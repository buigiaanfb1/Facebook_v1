import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import avatar from '../../../common/images/avatar.png';
import { setCollection } from '../../../firebase/data/setCollection';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
const CommentInput = ({ postID }) => {
  const currentUser = useSelector((state) => state.userStore.currentUser);
  const classes = useStyles();
  const { addCommentWithID } = setCollection('comments-post');
  const [info, setInfo] = useState({
    postID: postID,
    user: currentUser,
    text: '',
    imageBlob: [],
    id: uuidv4(),
  });
  const types = ['image/png', 'image/jpeg'];

  const handleChangeText = (e) => {
    let textarea = document.getElementById(`${postID}`);
    let iconContainer = document.getElementById(`${postID}IconContainer`);
    let heightLimit = 1000000; /* Maximum height: 200px */
    let moreHeight = 0;
    let lengthOfText = textarea.value.length; // get length
    // length >= 85, fontSize will auto resize to 15px,
    if (textarea.scrollHeight > 36) {
      textarea.style.borderRadius = '16px';
      iconContainer.style.bottom = '1.2rem';
      textarea.style.paddingRight = '12px';
      if (lengthOfText > 35) {
        moreHeight += 20;
      }
    } else {
      textarea.style.borderRadius = '50px';
      textarea.style.paddingRight = '3rem';
      iconContainer.style.bottom = '50%';
      moreHeight = 0;
    }
    /* Reset the height just to make sure correct height*/
    textarea.style.height = '';
    // If < 210, defaultHeight, else heightLimit
    textarea.style.height =
      Math.min(textarea.scrollHeight + moreHeight, heightLimit) + 'px';
  };

  const handleDetectPastePicture = (event) => {
    // get Picture from clipboard
    let items = (event.clipboardData || event.originalEvent.clipboardData)
      .items;
    for (let index in items) {
      // get one by one file
      let item = items[index];

      if (item.kind === 'file' && types.includes(item.type)) {
        let blob = item.getAsFile();
        let reader = new FileReader();
        reader.onload = function (event) {
          // re-render
          setInfo({
            ...info,
            imageBlob: [event.target.result],
          });
        }; // data url!
        // This line will run before onload
        reader.readAsDataURL(blob);
      }
    }
  };

  const handleRenderPicture = () => {
    if (info.imageBlob && info.imageBlob.length > 0) {
      return info.imageBlob.map((image, index) => {
        return (
          <div className={classes.imageContainer}>
            <img
              id="haveImage"
              alt="haveImage"
              src={image}
              key={index}
              className={classes.image}
              // onClick={() => handleRemovePicture(index)}
            />
            <div className={classes.toolContainer}>
              <div
                className={classes.deletePictureUpload}
                onClick={() => handleDeletePicture()}
              >
                <i className={classes.deleteIcon}></i>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  const handleDeletePicture = () => {
    setInfo({
      ...info,
      imageBlob: [],
      id: uuidv4(),
    });
  };

  const handleInputFiles = (e) => {
    const files = e.target.files;

    // loop an object
    Object.keys(files).map((key) => {
      // init reader file
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        function () {
          // convert image file to base64 string
          setInfo({
            ...info,
            imageBlob: [reader.result],
          });
        },
        false
      );
      if (files[key]) {
        reader.readAsDataURL(files[key]);
      }
    });
  };

  const handleResetTextInState = () => {
    setInfo({
      ...info,
      text: '',
      id: uuidv4(),
    });
  };
  // choose file is work perfect but if we delete a picture and
  // choose it again it can't detected that it have change
  // so we need to ( delete the memory of the input tag) like
  // a trick
  const handleClickFile = (e) => {
    const element = e.target;

    element.value = '';
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      text: e.target.value,
    });
  };

  const handleDetectEnter = (e) => {
    let textarea = document.getElementById(`${postID}`);
    let lengthOfText = textarea.value.length; // get length
    if (e.keyCode === 13 && e.shiftKey === false) {
      if (lengthOfText < 35) {
        e.preventDefault();
        handleResetTextInState();
        handleSubmit();
        textarea.value = '';
      } else {
        e.preventDefault();
        handleResetTextInState();
        handleSubmit();
        textarea.style.height = '36px';
        textarea.value = '';
      }
    } else {
      handleChangeText();
    }
  };

  const handleSubmit = async () => {
    if (info.text.length > 0 || info.imageBlob.length > 0) {
      await addCommentWithID(info, postID);
      setInfo({
        ...info,
        imageBlob: [],
      });
    }
  };

  return (
    <>
      {currentUser && (
        <div className={classes.yourThinking}>
          <img
            src={currentUser?.avatar}
            className={classes.avatarOtherPeople}
          />
          <textarea
            id={`${postID}`}
            onChange={(e) => handleChange(e)}
            onPaste={(e) => handleDetectPastePicture(e)}
            placeholder="Bạn đang nghĩ gì?"
            className={classes.input}
            onKeyDown={(e) => handleDetectEnter(e)}
          />
          <div id={`${postID}IconContainer`} className={classes.containerIcon}>
            <label for="uploadPictureComment">
              <div className={classes.containerIconPicture}>
                <i className={classes.icon}></i>
              </div>
              <input
                type="file"
                id="uploadPictureComment"
                style={{ display: 'none' }}
                accept="image/png, image/jpeg"
                onChange={(e) => handleInputFiles(e)}
                onClick={(e) => handleClickFile(e)}
              />
            </label>
          </div>
        </div>
      )}
      {handleRenderPicture()}
    </>
  );
};

export default React.memo(CommentInput);
