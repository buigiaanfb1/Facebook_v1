import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import earth from '../../common/images/earth.png';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector, useDispatch } from 'react-redux';
import { POST_UPLOAD_STATUS } from '../../common/constants';
//Firebase
import { createAPost } from '../../firebase/data/createAPost';
import FormatPresets from './FormatPresets';
import { useAudio } from '../../hooks/useAudio';

const YourThinkingModal = (props) => {
  const classes = useStyles();
  const { toggle } = useAudio();
  const profileInfo = useSelector((state) => state.shareStore.profileInfo);
  const currentUser = useSelector((state) => state.userStore.currentUser);
  const { createAPostWithPicture, createAPostWithNoPicture } = createAPost();
  const dispatch = useDispatch();
  const types = ['image/png', 'image/jpeg'];
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [checkInput, setCheckInput] = useState({
    isValid: false,
    isShowPresets: true,
  });
  const [textPreset, setTextPreset] = useState({
    isPreset: false,
    isShow: false,
    backgroundPresetsUri: null,
    color: '#FFF',
  });
  const [info, setInfo] = useState({
    text: '',
    color: null,
    backgroundPresetsUri: null,
    imageBlob: [],
  });
  console.log(info);

  useEffect(() => {
    if (props.openModal) {
      handleOpen();
    }
  }, [props.openModal]);

  useEffect(() => {
    if (!textPreset.isShow) {
      console.log('use');
      info.color = null;
      info.backgroundPresetsUri = null;
    } else {
      info.color = textPreset.color;
      info.backgroundPresetsUri = textPreset.backgroundPresetsUri;
    }
  }, [textPreset]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    console.log(info);
    if (info.imageBlob && info.imageBlob.length > 0) {
      console.log('picture');
      setSubmitting(true);
      const res = await createAPostWithPicture(
        info.text,
        info.imageBlob,
        profileInfo,
        currentUser?.avatar
      );
      handleReRender(res);
      handleClose();
      toggle();
      setSubmitting(false);
    } else {
      console.log('text');
      setSubmitting(true);
      const res = await createAPostWithNoPicture(
        info.text,
        info.color,
        info.backgroundPresetsUri,
        profileInfo,
        currentUser?.avatar
      );
      handleReRender(res);
      handleClose();
      toggle();
      setSubmitting(false);
    }
  };
  // Đăng bài thành công (server trả về 200) thì re render cmp
  const handleReRender = (status) => {
    if (status === 200) {
      dispatch({
        type: POST_UPLOAD_STATUS,
      });
    }
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
    let textarea = document.getElementById('textareaYourThinkingModalPost');
    let heightLimit = 1000000; /* Maximum height: 200px */
    let lengthOfText = textarea.value.length; // get length
    setInfo({
      ...info,
      text: textarea.value,
    });
    if (lengthOfText > 0) {
      setCheckInput({
        isValid: lengthOfText > 0 ? true : false,
        isShowPresets: lengthOfText >= 85 ? false : true,
      });
    }
    // length >= 85, fontSize will auto resize to 15px,
    if (lengthOfText >= 85) {
      if (textPreset.isPreset) {
        setTextPreset({
          ...textPreset,
          isShow: false,
        });
      }
      textarea.style.fontSize = '15px';
    } else {
      if (textPreset.isPreset) {
        info.color = textPreset.color;
        info.backgroundPresetsUri = textPreset.backgroundPresetsUri;
        setTextPreset({
          ...textPreset,
          isShow: true,
        });
      }
      textarea.style.fontSize = '24px';
    }
    if (textarea.scrollHeight > 105) {
      setCheckInput({
        ...checkInput,
        isShowPresets: false,
      });
      setTextPreset({
        ...textPreset,
        isShow: false,
      });
    } else {
      setCheckInput({
        isValid: lengthOfText > 0 ? true : false,
        isShowPresets:
          lengthOfText >= 85 || textarea.scrollHeight > 105 ? false : true,
      });
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
            alt="haveImage"
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

  const handleSetTextPresetsFromChild = (presets, color) => {
    setTextPreset({
      isShow: true,
      isPreset: true,
      backgroundPresetsUri: presets,
      color: color,
    });
    info.color = color;
    info.backgroundPresetsUri = presets;
  };

  const handleResetPresetsFromChild = () => {
    info.color = null;
    info.backgroundPresetsUri = null;
    setTextPreset({
      isPreset: false,
      isShow: false,
      backgroundPresetsUri: null,
      color: '#FFF',
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
              <img
                src={props.currentUser?.avatar}
                className={classes.avatar}
                alt="user avatar pic"
              />
              <div className={classes.nameVsPrivacy}>
                <Typography className={classes.name}>
                  {props.currentUser?.username}
                </Typography>
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
                {/* No Presets Background ?  */}
                {!textPreset.isShow ? (
                  <>
                    <div className={classes.textAreaContainer}>
                      <textarea
                        ref={(ref) => ref && ref.focus()}
                        onFocus={(e) =>
                          e.currentTarget.setSelectionRange(
                            e.currentTarget.value.length,
                            e.currentTarget.value.length
                          )
                        }
                        id="textareaYourThinkingModalPost"
                        value={info.text}
                        onChange={(e) => handleChangeText(e)}
                        onPaste={(e) => handleDetectPastePicture(e)}
                        placeholder="Bạn đang nghĩ gì?"
                        className={classes.textArea}
                      ></textarea>
                    </div>
                    <div className={classes.containerImage}>
                      {handleRenderPicture()}
                    </div>
                  </>
                ) : (
                  <div className={classes.backgroundPresetsContainer}>
                    <img
                      src={textPreset.backgroundPresetsUri}
                      className={classes.backgroundPresets}
                      alt="background presets"
                    />
                    <div className={classes.textAreaContainerTextPresets}>
                      <textarea
                        ref={(ref) => ref && ref.focus()}
                        onFocus={(e) =>
                          e.currentTarget.setSelectionRange(
                            e.currentTarget.value.length,
                            e.currentTarget.value.length
                          )
                        }
                        id="textareaYourThinkingModalPost"
                        style={{
                          color: `#${
                            textPreset.color === 'FF000000'
                              ? '000'
                              : textPreset.color
                          }`,
                        }}
                        value={info.text}
                        onChange={(e) => handleChangeText(e)}
                        onPaste={(e) => handleDetectPastePicture(e)}
                        placeholder="Bạn đang nghĩ gì?"
                        className={classes.textArea}
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>
              {checkInput.isShowPresets && (
                <FormatPresets
                  handleSetTextPresetsFromChild={handleSetTextPresetsFromChild}
                  handleResetPresetsFromChild={handleResetPresetsFromChild}
                />
              )}
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
                <label for="uploadPictureThinking">
                  <div className={classes.containerIconPicture}>
                    <i className={classes.pictureIcon}></i>
                  </div>
                  <input
                    type="file"
                    multiple
                    id="uploadPictureThinking"
                    style={{ display: 'none' }}
                    accept="image/png, image/jpeg"
                    onChange={(e) => handleInputFiles(e)}
                  />
                </label>
              </div>
              <div className={classes.buttonPostContainer}>
                {!checkInput.isValid || submitting ? (
                  <button className={classes.buttonPostDisabled}>
                    <Typography className={classes.buttonPostTextDisabled}>
                      Đăng
                    </Typography>
                  </button>
                ) : (
                  <button className={classes.buttonPost} onClick={handleSubmit}>
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
