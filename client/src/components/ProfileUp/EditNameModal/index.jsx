import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import editIcon from '../../../common/images/editIcon.png';
import { useStyles } from './styles';
import { TextField, Typography } from '@material-ui/core';
import { setCollection } from '../../../firebase/data/setCollection';
import { ToastContainer, toast } from 'react-toastify';

const EditNameModal = ({ profileInfo }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (profileInfo) {
      setName(profileInfo.username);
    }
  }, [profileInfo]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length < 12) {
      setName(value);
    } else return;
  };

  const handleSubmit = async () => {
    if (name !== '') {
      const { updateNameFieldDoc } = setCollection('users');
      toast.dark('Đang đổi tên...');
      await updateNameFieldDoc(name, profileInfo.userID);
      handleClose();
      toast.dark(`Đã đổi tên thành ${name}, enjoy...`);
    }
  };

  return (
    <div>
      <div className={classes.containerIcon} onClick={handleOpen}>
        <img src={editIcon} alt="edit icon" className={classes.iconEditName} />
      </div>
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
              <Typography className={classes.title}>Chỉnh sửa tên</Typography>
            </div>
            <div className={classes.detailsContainer}>
              <Typography style={{ fontWeight: '500', fontSize: '17px' }}>
                Tên mới của bạn:
              </Typography>

              <div className={classes.detailItem}>
                <div style={{ padding: '12px 0 8px 0' }}>
                  <TextField
                    className={classes.textField}
                    onChange={handleChange}
                    value={name}
                    label="Nhập tên"
                    variant="outlined"
                    size="small"
                    type="input"
                    inputProps={{ maxLength: 12 }}
                    InputLabelProps={{
                      className: classes.inputLabelProps,
                    }}
                  />
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
                {name === '' || name === profileInfo?.username ? (
                  <button className={classes.buttonDisabled}>
                    <Typography className={classes.buttonTextDisabled}>
                      Lưu
                    </Typography>
                  </button>
                ) : (
                  <button
                    className={classes.saveContainer}
                    onClick={() => handleSubmit()}
                  >
                    <Typography className={classes.iconRightText}>
                      Lưu
                    </Typography>
                  </button>
                )}
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

export default EditNameModal;
