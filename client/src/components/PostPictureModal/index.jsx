import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PictureModal from '../PictureModal';
import logo from '../../common/images/logo.png';
import PostNoImage from '../PostNoImage';
import history from '../../history';
import { useStyles } from './styles';

const PostPictureModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  console.log(props.pictures);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [fullWidth, setFullWidth] = useState(false);
  // get data from Parent (PictureProfile)
  useEffect(() => {
    // if true, the Modal will open
    if (props.openModal) {
      handleOpen();
    }
    // observable
  }, [props.openModal]);

  useEffect(() => {
    if (props.pictures) {
      setSelectedPicture(props.pictures.selectedPicture);
    }
  }, [props.pictures]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFullWidth = () => {
    setFullWidth(!fullWidth);
  };

  const handleRedirectToHomePage = async () => {
    await setOpen(false);
    history.push('/');
  };

  const handleChangeSelectedPicture = (direction) => {
    if (props.pictures.picturesArr.length > 1) {
      if (direction) {
        if (
          props.pictures.selectedPictureIndex ===
          props.pictures.picturesArr.length - 1
        ) {
          props.handleChangePictureFromChild(0);
        } else {
          props.handleChangePictureFromChild(
            props.pictures.selectedPictureIndex + 1
          );
        }
      } else {
        if (props.pictures.selectedPictureIndex === 0) {
          props.handleChangePictureFromChild(
            props.pictures.picturesArr.length - 1
          );
        } else {
          props.handleChangePictureFromChild(
            props.pictures.selectedPictureIndex - 1
          );
        }
      }
    }
  };
  return (
    <div className={classes.root}>
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
            <div className={classes.container}>
              <div
                className={`${
                  !fullWidth ? classes.itemLeft : classes.itemLeftFullWidth
                }`}
              >
                {/* Navigation Fixed */}
                <div className={classes.containerNavigation}>
                  <div className={classes.navLeft}>
                    <div
                      className={classes.navLeftIconContainer}
                      onClick={handleClose}
                    >
                      <i className={classes.iconExit}></i>
                    </div>
                    <img
                      src={logo}
                      className={classes.logo}
                      onClick={handleRedirectToHomePage}
                      alt="logo"
                    />
                  </div>
                  <div className={classes.navRight}>
                    <div
                      className={classes.navRightIconContainer}
                      onClick={handleFullWidth}
                    >
                      <i className={classes.iconFullView}></i>
                    </div>
                  </div>
                </div>
                {/* ArrowLeft */}
                <div className={classes.containerArrowLeft}>
                  <div
                    className={classes.iconContainer}
                    onClick={() => handleChangeSelectedPicture(false)}
                  >
                    <i className={classes.iconLeft}></i>
                  </div>
                </div>
                {/* Main Picture */}
                <PictureModal selectedPicture={selectedPicture} />
                {/* ArrowRight */}
                <div className={classes.containerArrowRight}>
                  <div
                    className={classes.iconContainer}
                    onClick={() => handleChangeSelectedPicture(true)}
                  >
                    <i className={classes.iconRight}></i>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  !fullWidth ? classes.itemRight : classes.itemNoneRight
                }`}
              >
                <PostNoImage />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PostPictureModal;
