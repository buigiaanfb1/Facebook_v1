import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getSubDocument } from '../../firebase/data/getDocument';
import PostPictureModal from '../PostPictureModal';

const PicturesTabProfile = () => {
  const classes = useStyles();
  const profileInfo = useSelector((state) => state.shareStore.profileInfo);
  const [openPostPictureModal, setPostPictureModal] = useState(false);
  const [pictures, setPictures] = useState({
    picturesArr: null,
    selectedPicture: null,
    selectedPictureIndex: null,
  });

  useEffect(() => {
    handleFetchPicturesProfile();
  }, [profileInfo]);

  const handleFetchPicturesProfile = async () => {
    const res = await getSubDocument('users', 'pictures', profileInfo.userID);
    if (res) {
      setPictures({
        ...pictures,
        picturesArr: res.pictures,
      });
    }
  };

  // mở Modal
  const handleOpenModalPicture = () => {
    setPostPictureModal({
      openPostPictureModal: true,
    });
  };

  const handleChangePictureFromChild = (index) => {
    setPictures({
      ...pictures,
      selectedPicture: pictures.picturesArr[index],
      selectedPictureIndex: index,
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

  const handleRenderPictures = () => {
    return pictures.picturesArr
      .slice()
      .reverse()
      .map((picture, index) => {
        return (
          <div
            className={classes.containerImage}
            key={index}
            onClick={() => handleSetPictureSelected(picture, index)}
          >
            <img src={picture} className={classes.image} />
          </div>
        );
      });
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={2} md={1} sm={0} xs={0}></Grid>
        <Grid item lg={8} md={10} sm={12} xs={12}>
          <div className={classes.container}>
            <Typography className={classes.title}>Ảnh</Typography>
            {pictures.picturesArr ? (
              <div className={classes.containerAll}>
                {handleRenderPictures()}
              </div>
            ) : null}
          </div>
        </Grid>
        <Grid item lg={2} md={1} sm={0} xs={0}></Grid>
      </Grid>
      {openPostPictureModal && (
        <PostPictureModal
          openModal={openPostPictureModal}
          handleChangePictureFromChild={handleChangePictureFromChild}
          pictures={pictures}
        />
      )}
    </div>
  );
};

export default PicturesTabProfile;
