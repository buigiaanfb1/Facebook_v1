import React, { useState } from 'react';
import WallpaperVsAvatarModal from '../WallpaperVsAvatarModal';

const ImageForMessenger = ({ image, className = '' }) => {
  const [openPostPictureModal, setPostPictureModal] = useState({
    open: false,
    picture: null,
  });

  // mở Modal
  const handleOpenModalPicture = (picture) => {
    setPostPictureModal({
      open: true,
      picture: picture,
    });
  };

  const listenModalChildren = (close) => {
    if (!close) {
      setPostPictureModal({
        open: false,
        picture: null,
      });
    }
  };

  return (
    <>
      <img
        src={image}
        onClick={() => handleOpenModalPicture(image)}
        alt="img in messenger"
        className={className}
      />
      <WallpaperVsAvatarModal
        openModal={openPostPictureModal.open}
        picture={openPostPictureModal.picture}
        listenModalChildren={listenModalChildren}
      />
    </>
  );
};

export default ImageForMessenger;
