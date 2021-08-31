import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import PicturesModal from './PicturesModal';
const TogglePicturesHistory = ({ messageSelected, currentUser }) => {
  const classes = useStyles();
  const images = useSelector((state) => state.messengerPicturesStore.pictures);
  const [openPostPictureModal, setPostPictureModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [pictures, setPictures] = useState({
    picturesArr: null,
    selectedPicture: null,
    selectedPictureIndex: null,
  });

  useEffect(() => {
    if (images) {
      setPictures({
        ...pictures,
        picturesArr: images,
      });
    }
  }, [images]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOpenModalPicture = () => {
    setPostPictureModal({
      openPostPictureModal: true,
    });
  };

  const handleSetPictureSelected = (selectedPicture, index) => {
    setPictures({
      ...pictures,
      selectedPicture: selectedPicture,
      selectedPictureIndex: index,
    });
    handleOpenModalPicture();
  };

  const handleChangePictureFromChild = (index) => {
    setPictures({
      ...pictures,
      selectedPicture: pictures.picturesArr[index],
      selectedPictureIndex: index,
    });
  };

  const handleRenderPictures = () => {
    return images
      .slice(0)
      .reverse()
      .map((picture, index) => {
        return (
          <div
            className={classes.item}
            key={index}
            onClick={() => handleSetPictureSelected(picture, index)}
          >
            <img src={picture} alt="avatar" className={classes.picture} />
          </div>
        );
      });
  };
  return (
    <>
      <div className={classes.containerToggle} onClick={handleToggle}>
        <Typography className={classes.toggleText}>
          Hình ảnh được chia sẻ
        </Typography>
        <i
          className={`${toggle ? classes.toggledIcon : classes.toggleIcon}`}
        ></i>
      </div>
      {toggle && images.length > 0 ? (
        <div className={classes.containerPictures}>
          {handleRenderPictures()}
        </div>
      ) : null}
      {openPostPictureModal && (
        <PicturesModal
          handleChangePictureFromChild={handleChangePictureFromChild}
          openModal={openPostPictureModal}
          pictures={pictures}
        />
      )}
    </>
  );
};

export default TogglePicturesHistory;
