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
  const [fullWidth, setFullWidth] = useState(false);
  // get data from Parent (PictureProfile)
  useEffect(() => {
    // if true, the Modal will open
    if (props.openModal) {
      handleOpen();
    }
    // observable
  }, [props.openModal]);

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
                  <div className={classes.iconContainer}>
                    <i className={classes.iconLeft}></i>
                  </div>
                </div>
                {/* Main Picture */}
                <PictureModal />
                {/* ArrowRight */}
                <div className={classes.containerArrowRight}>
                  <div className={classes.iconContainer}>
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
