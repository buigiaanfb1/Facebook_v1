import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import iconWorkWhere from '../../common/images/iconWorkWhere.png';
import iconLocationWhere from '../../common/images/iconLocationWhere.png';
import iconHomeWhere from '../../common/images/iconHomeWhere.png';
import iconStudyWhere from '../../common/images/iconStudyWhere.png';
import { Typography } from '@material-ui/core';

const IntroductionProfile = () => {
  const classes = useStyles();
  //
  const [slogan, setSlogan] = useState({
    oldSlogan: 'oldSlogan',
    lengthOfSlogan: 100,
    newSlogan: '',
    edited: false,
    save: false,
  });
  // handle Change Text Edit
  const handleChangeEditText = (e) => {
    const { value } = e.target;
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
      newSlogan: slogan.oldSlogan,
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
    if (!slogan.edited) {
      if (slogan.oldSlogan && slogan.oldSlogan.length > 1) {
        return (
          <>
            <Typography className={classes.slogan}>
              {slogan.oldSlogan}
            </Typography>
            <button className={classes.button} onClick={handleOpenTextArea}>
              <Typography className={classes.titleButton}>
                Chỉnh sửa tiểu sử
              </Typography>
            </button>
          </>
        );
      } else {
        return (
          <button className={classes.button} onClick={handleOpenTextArea}>
            <Typography className={classes.titleButton}>
              Thêm tiểu sử
            </Typography>
          </button>
        );
      }
    } else {
      return (
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
              >
                <Typography className={classes.textRemoveButton}>
                  Huỷ
                </Typography>
              </button>
              {handleRenderButtonSave()}
            </div>
          </div>
        </div>
      );
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
        <button className={classes.buttonSaveContainer}>
          <Typography className={classes.textSaveButton}>Lưu</Typography>
        </button>
      );
    }
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Giới thiệu</Typography>
      {handleRenderSloganOrButton()}
      {/*  */}
      <div className={classes.item}>
        <img src={iconWorkWhere} className={classes.iconWhere} />
        <Typography className={classes.textWhere}>
          Làm việc tại{' '}
          <span className={classes.textWhereMain}>FPT Sofware</span>
        </Typography>
      </div>
      <div className={classes.item}>
        <img src={iconStudyWhere} className={classes.iconWhere} />
        <Typography className={classes.textWhere}>
          Đã học tại{' '}
          <span className={classes.textWhereMain}>FPT University</span>
        </Typography>
      </div>
      <div className={classes.item}>
        <img src={iconHomeWhere} className={classes.iconWhere} />
        <Typography className={classes.textWhere}>
          Sống tại{' '}
          <span className={classes.textWhereMain}>Thành phố Hồ Chí Minh</span>
        </Typography>
      </div>
      <div className={classes.item}>
        <img src={iconLocationWhere} className={classes.iconWhere} />
        <Typography className={classes.textWhere}>
          Đến từ{' '}
          <span className={classes.textWhereMain}>
            Thành phố Tân An, Long An
          </span>
        </Typography>
      </div>
      {/*  */}
      <button className={classes.button}>
        <Typography className={classes.titleButton}>
          Chỉnh sửa chi tiết
        </Typography>
      </button>
      <button className={classes.button}>
        <Typography className={classes.titleButton}>Thêm sở thích</Typography>
      </button>
      <button className={classes.button}>
        <Typography className={classes.titleButton}>
          Thêm nội dung đáng chú ý
        </Typography>
      </button>
    </div>
  );
};

export default React.memo(IntroductionProfile);
