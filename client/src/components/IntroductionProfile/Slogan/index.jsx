import React, { useEffect, useState } from 'react';
import { useStyles } from '../styles';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ThreeDots from '../../../componentsLoader/ThreeDots';
import { setCollection } from '../../../firebase/data/setCollection';

const Slogan = () => {
  console.log('slogan render');
  const profileInfo = useSelector((state) => state.shareStore.profileInfo);
  const currentUser = useSelector((state) => state.userStore.currentUser);
  const classes = useStyles();
  const { updateSloganFieldDoc } = setCollection('users');

  useEffect(() => {
    if (profileInfo && profileInfo.slogan !== slogan.oldSlogan) {
      setSlogan({
        ...slogan,
        oldSlogan: profileInfo.slogan,
      });
    }
  }, [profileInfo]);

  const [slogan, setSlogan] = useState({
    oldSlogan: null,
    lengthOfSlogan: 100,
    newSlogan: '',
    edited: false,
    save: false,
    submit: false,
  });

  // handle Change Text Edit
  const handleChangeEditText = (e) => {
    const { value } = e.target;
    console.log(value);
    if (value !== slogan.oldSlogan) {
      setSlogan({
        ...slogan,
        newSlogan: value,
        lengthOfSlogan: 100 - value.length,
        save: true,
      });
    } else {
      setSlogan({
        ...slogan,
        newSlogan: value,
        lengthOfSlogan: 100 - value.length,
        save: false,
      });
    }
  };

  // handle open textarea
  const handleOpenTextArea = () => {
    setSlogan({
      ...slogan,
      newSlogan: profileInfo.slogan,
      save: false,
      edited: true,
    });
  };
  // handle close textarea
  const handleCloseTextArea = () => {
    setSlogan({
      ...slogan,
      edited: false,
    });
  };

  // if user does not have slogan, show the Text and Button else
  // show Button Edit
  const handleRenderSloganOrButton = () => {
    if (profileInfo && currentUser) {
      if (!slogan.edited) {
        if (profileInfo?.slogan && profileInfo?.slogan.length > 1) {
          return (
            <>
              <Typography className={classes.slogan}>
                {profileInfo.slogan}
              </Typography>
              {currentUser?.userID === profileInfo?.userID ? (
                <button className={classes.button} onClick={handleOpenTextArea}>
                  <Typography className={classes.titleButton}>
                    Chỉnh sửa tiểu sử
                  </Typography>
                </button>
              ) : null}
            </>
          );
        } else {
          return currentUser?.userID === profileInfo?.userID ? (
            <button className={classes.button} onClick={handleOpenTextArea}>
              <Typography className={classes.titleButton}>
                Thêm tiểu sử
              </Typography>
            </button>
          ) : null;
        }
      } else {
        return (
          <div className={classes.containerEditing}>
            <div className={slogan.submit ? classes.loadingCmp : null}>
              {slogan.submit ? (
                <div className={classes.upperLoadingDiv}>
                  <ThreeDots />
                </div>
              ) : null}
              <div className={classes.containerSlogan}>
                <div className={classes.textAreaContainer}>
                  <textarea
                    id="textAreaIntroduce"
                    className={classes.textArea}
                    placeholder="Mô tả về bạn"
                    maxLength="100"
                    value={slogan.newSlogan}
                    onChange={(e) => handleChangeEditText(e)}
                  ></textarea>
                </div>
                <Typography className={classes.characterLeft}>
                  Còn {slogan.lengthOfSlogan} ký tự
                </Typography>
                <div className={classes.buttonSaveVsRemoveVsPublic}>
                  <div className={classes.earthContainer}>
                    <i className={classes.earthIcon}></i>
                    <Typography className={classes.earthIconText}>
                      Công khai
                    </Typography>
                  </div>
                  <div className={classes.buttonSaveVsRemove}>
                    <button
                      className={classes.buttonRemoveContainer}
                      onClick={handleCloseTextArea}
                      style={{
                        cursor: `${slogan.submit ? 'not-allowed' : null}`,
                      }}
                      disabled={slogan.submit ? true : false}
                    >
                      <Typography className={classes.textRemoveButton}>
                        Huỷ
                      </Typography>
                    </button>
                    {handleRenderButtonSave()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  const handleRenderButtonSave = () => {
    if (!slogan.save) {
      return (
        <button className={classes.buttonSaveContainerDisable}>
          <Typography className={classes.textSaveButtonDisable}>Lưu</Typography>
        </button>
      );
    } else {
      return (
        <button className={classes.buttonSaveContainer} onClick={handleSubmit}>
          <Typography className={classes.textSaveButton}>Lưu</Typography>
        </button>
      );
    }
  };

  const handleSubmit = async () => {
    setSlogan({
      ...slogan,
      submit: true,
    });
    await updateSloganFieldDoc(slogan.newSlogan, profileInfo.userID);
    setSlogan({
      ...slogan,
      edited: false,
      submit: false,
    });
  };

  return (
    <>
      <Typography className={classes.title}>Giới thiệu</Typography>
      {handleRenderSloganOrButton()}
    </>
  );
};

export default React.memo(Slogan);
