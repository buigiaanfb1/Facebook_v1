import React, { useEffect } from 'react';
import { useStyles } from './styles.js';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import content1 from '../../common/images/test2.jpeg';
import Fade from '@material-ui/core/Fade';

const WallpaperVsAvatarModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // get data from Parent (ProfileUp)
  useEffect(() => {
    console.log(props.openModal);
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
          <div className={classes.paper}>
            <div className={classes.iconExitContainer} onClick={handleClose}>
              <i className={classes.iconExit}></i>
            </div>
            <div className={classes.wallpaperContainer}>
              <img src={props.picture} className={classes.wallpaper} />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default WallpaperVsAvatarModal;
