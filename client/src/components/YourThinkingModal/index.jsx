import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import avatar from '../../common/images/avatar.png';
import earth from '../../common/images/earth.png';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const YourThinkingModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [checkInput, setCheckInput] = useState(false);
  const [info, setInfo] = useState({
    text: '',
    imageBlob: [],
  });
  const types = ['image/png', 'image/jpeg'];

  console.log(info);

  useEffect(() => {
    if (props.openModal) {
      handleOpen();
    }
  }, [props.openModal]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputFiles = (e) => {
    // copy deep of state imageBlob
    let arrPicture = [...info.imageBlob];
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
          setInfo({
            ...info,
            imageBlob: arrPicture,
          });
        },
        false
      );
      if (files[key]) {
        reader.readAsDataURL(files[key]);
      }
    });
  };

  const handleChangeText = (e) => {
    let textarea = document.getElementById('textareaYourThinkingModal');
    let heightLimit = 1000000; /* Maximum height: 200px */
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
    // length >= 85, fontSize will auto resize to 15px,
    if (lengthOfText >= 85) {
      textarea.style.fontSize = '15px';
    } else {
      textarea.style.fontSize = '24px';
    }
    /* Reset the height just to make sure correct height*/
    textarea.style.height = '';
    // If < 210, defaultHeight, else heightLimit
    textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + 'px';
  };

  const handleDetectPastePicture = (event) => {
    // copy deep of state imageBlob
    let arrPicture = [...info.imageBlob];
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
          setInfo({
            ...info,
            imageBlob: arrPicture,
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
          <img
            id="haveImage"
            src={image}
            key={index}
            className={classes.image}
            onClick={() => handleRemovePicture(index)}
          />
        );
      });
    }
  };

  const handleRemovePicture = (index) => {
    let arrPicture = [...info.imageBlob];
    arrPicture.splice(index, 1);
    setInfo({
      ...info,
      imageBlob: arrPicture,
    });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.container}>
            <div className={classes.topFixed}>
              <Typography className={classes.title}>Tạo bài viết</Typography>
            </div>
            <div className={classes.avatarVsName}>
              <img src={avatar} className={classes.avatar} />
              <div className={classes.nameVsPrivacy}>
                <Typography className={classes.name}>An An</Typography>
                <div className={classes.containerPrivacy}>
                  <img src={earth} className={classes.earth} />
                  <Typography className={classes.privacyText}>
                    Công khai
                  </Typography>
                  <i className={classes.arrowDown}></i>
                </div>
              </div>
            </div>
            <div className={classes.scroll}>
              <div className={classes.paper}>
                <div className={classes.textAreaContainer}>
                  <textarea
                    id="textareaYourThinkingModal"
                    onChange={(e) => handleChangeText(e)}
                    onPaste={(e) => handleDetectPastePicture(e)}
                    placeholder="Bạn đang nghĩ gì?"
                    className={classes.textArea}
                    // style={{
                    //   minHeight: `${imageBlob.length > 0 ? '50px' : ''}`,
                    // }}
                  ></textarea>
                </div>
                <div className={classes.containerImage}>
                  {handleRenderPicture()}
                </div>
              </div>{' '}
              {/* Exit Icon */}
              <div className={classes.exitContainer} onClick={handleClose}>
                <i className={classes.exit}></i>
              </div>
            </div>
            <div className={classes.bottomFixed}>
              <div className={classes.toolsContainer}>
                <Typography className={classes.textAdd}>
                  Thêm vào bài viết
                </Typography>
                <label for="upload">
                  <div className={classes.containerIconPicture}>
                    <i className={classes.pictureIcon}></i>
                  </div>
                  <input
                    type="file"
                    multiple
                    id="upload"
                    style={{ display: 'none' }}
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleInputFiles(e)}
                  />
                </label>
              </div>
              <div className={classes.buttonPostContainer}>
                {!checkInput ? (
                  <button className={classes.buttonPostDisabled}>
                    <Typography className={classes.buttonPostTextDisabled}>
                      Đăng
                    </Typography>
                  </button>
                ) : (
                  <button className={classes.buttonPost}>
                    <Typography className={classes.buttonPostText}>
                      Đăng
                    </Typography>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default YourThinkingModal;
