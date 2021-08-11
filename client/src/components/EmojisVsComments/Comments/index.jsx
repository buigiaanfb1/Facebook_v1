import React, { useState } from 'react';
import { useStyles } from './styles';
import avatar from '../../../common/images/avatar.png';
import { set } from 'mongoose';

const Comments = ({ postID }) => {
  const classes = useStyles();
  const [info, setInfo] = useState({
    text: '',
    imageBlob: [],
  });
  const [checkInput, setCheckInput] = useState(false);
  const types = ['image/png', 'image/jpeg'];

  const handleChangeText = (e) => {
    let textarea = document.getElementById(`${postID}`);
    let iconContainer = document.getElementById(`${postID}IconContainer`);
    let heightLimit = 1000000; /* Maximum height: 200px */
    let moreHeight = 0;
    let lengthOfText = textarea.value.length; // get length
    if (lengthOfText > 0) {
      setInfo({
        ...info,
        text: textarea.value,
      });
      setCheckInput(true);
    } else {
      setCheckInput(false);
    }

    console.log(textarea.scrollHeight);
    // length >= 85, fontSize will auto resize to 15px,
    if (textarea.scrollHeight > 36) {
      textarea.style.borderRadius = '16px';
      iconContainer.style.bottom = '1.2rem';
      textarea.style.paddingRight = '12px';
      if (lengthOfText > 35) {
        console.log(lengthOfText);
        moreHeight += 20;
      }
    } else {
      textarea.style.borderRadius = '50px';
      textarea.style.paddingRight = '3rem';
      iconContainer.style.bottom = '50%';
      moreHeight = 0;
    }
    console.log(moreHeight);
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
    console.log(JSON.stringify(items)); // will give you the mime types
    for (let index in items) {
      // get one by one file
      let item = items[index];
      console.log(item);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <>
      <div className={classes.yourThinking}>
        <img src={avatar} className={classes.avatarOtherPeople} />
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <textarea
            id={`${postID}`}
            onChange={(e) => handleChangeText(e)}
            onPaste={(e) => handleDetectPastePicture(e)}
            placeholder="Bạn đang nghĩ gì?"
            className={classes.input}
            enter
          />
          <button type="submit" style={{ display: 'none' }}></button>
        </form>
        <div id={`${postID}IconContainer`} className={classes.containerIcon}>
          <label for="upload">
            <div className={classes.containerIconPicture}>
              <i className={classes.icon}></i>
            </div>
            <input
              type="file"
              id="upload"
              style={{ display: 'none' }}
              accept="image/png, image/jpeg"
              onChange={(e) => handleInputFiles(e)}
            />
          </label>
        </div>
      </div>
      {handleRenderPicture()}
    </>
  );
};

export default Comments;
