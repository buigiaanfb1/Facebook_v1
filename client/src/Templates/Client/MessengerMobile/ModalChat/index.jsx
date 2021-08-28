import React, { useEffect } from 'react';
import Slide from '@material-ui/core/Slide';
import Modal from '@material-ui/core/Modal';
import Messenger from './Message';
import Backdrop from '@material-ui/core/Backdrop';
import { useStyles } from './styles';

const ModalChat = ({
  openChatModal,
  handleCloseModalChatFromChild,
  currentUser,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(openChatModal);
  }, [openChatModal]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
          <div className={classes.paper}>
            {/* <button onClick={handleCloseModalChatFromChild}> close</button> */}
            <Messenger
              currentUser={currentUser}
              handleCloseModalChatFromChild={handleCloseModalChatFromChild}
            />
          </div>
        </Slide>
      </Modal>
    </div>
  );
};

export default ModalChat;
