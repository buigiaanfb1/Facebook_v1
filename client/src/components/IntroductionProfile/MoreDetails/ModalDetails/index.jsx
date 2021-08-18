import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Switch from '@material-ui/core/Switch';
import { Typography, withStyles } from '@material-ui/core';
import { formatThangMMNamYYYYY } from '../../../../helpers/formatThangMMNamYYYY';
import { setCollection } from '../../../../firebase/data/setCollection';
import ComboBox from './ComboBox';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 44,
    height: 24,
    padding: 0,
  },
  switchBase: {
    padding: 1,
    height: '24px',
    '&$checked': {
      transform: 'translateX(20.5px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: 'var(--button-blue)',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: 'var(--button-blue)',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 20,
    height: 20,
    transform: 'translateX(1px)',
    backgroundColor: 'var(--primary-text-button)',
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: 'var(--background-button)',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const ModalDetails = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const { updateInfoFieldDoc } = setCollection('users');

  useEffect(() => {
    if (props.profileInfo) {
      setInfo(props.profileInfo.info);
    }
  }, [props.profileInfo]);

  const handleChange = (event) => {
    let obj = info[event.target.name];
    let checked = event.target.checked;
    obj.display = checked;
    setInfo({ ...info, createdAt: obj });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRenderDayJoined = () => {
    if (info) {
      const result = formatThangMMNamYYYYY(info.createdAt.time);
      return (
        <div className={classes.itemSwitch}>
          <IOSSwitch
            checked={info?.createdAt.display}
            onChange={(e) => handleChange(e)}
            name="createdAt"
          />
          <Typography className={classes.itemText}>
            {info?.createdAt.label} {result}
          </Typography>
        </div>
      );
    }
  };

  const handleSave = async () => {
    await updateInfoFieldDoc(info, props.profileInfo.userID);
    handleClose();
  };

  const handleRenderButton = () => {
    if (props.profileInfo && props.currentUser) {
      return props.profileInfo?.userID === props.currentUser?.userID ? (
        <button className={classes.button} onClick={handleOpen}>
          <Typography className={classes.titleButton}>
            Chỉnh sửa chi tiết
          </Typography>
        </button>
      ) : null;
    }
  };
  return (
    <div>
      {handleRenderButton()}

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
          <div className={classes.paper}>
            <div className={classes.titleContainer}>
              <Typography className={classes.title}>
                Chỉnh sửa chi tiết
              </Typography>
            </div>
            <div className={classes.detailsContainer}>
              <Typography style={{ fontWeight: '500', fontSize: '17px' }}>
                Chỉnh sửa phần giới thiệu
              </Typography>
              <Typography
                style={{
                  fontWeight: 'normal',
                  fontSize: '15px',
                  color: 'var(--secondary-text)',
                  lineHeight: '15px',
                }}
              >
                Những chi tiết bạn chọn sẽ hiển thị công khai nhưng không xuất
                hiện trên Bảng tin.
              </Typography>
              <div className={classes.detailItem}>
                <Typography className={classes.titleDetailItem}>
                  Tham gia Facebook
                </Typography>
                {handleRenderDayJoined()}
              </div>
              <div className={classes.detailItem}>
                <Typography className={classes.titleDetailItem}>
                  Tỉnh/Thành phố hiện tại
                </Typography>
                <div style={{ padding: '12px 0 8px 0' }}>
                  {/* <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Combo box"
                        variant="outlined"
                      />
                    )}
                  /> */}
                  <ComboBox classes={classes} />
                </div>
              </div>
            </div>
            <div className={classes.footer}>
              <div className={classes.buttonContainer}>
                <button
                  className={classes.unSaveContainer}
                  onClick={handleClose}
                >
                  <Typography className={classes.iconRightText}>Huỷ</Typography>
                </button>
                <button
                  className={classes.saveContainer}
                  onClick={() => handleSave()}
                >
                  <Typography className={classes.iconRightText}>Lưu</Typography>
                </button>
              </div>
            </div>
            <div className={classes.iconExitContainer} onClick={handleClose}>
              <i className={classes.iconExit}></i>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalDetails;
