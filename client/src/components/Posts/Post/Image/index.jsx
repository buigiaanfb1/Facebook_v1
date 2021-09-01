import React, { useState } from 'react';
import { useStyles } from '../styles';
import { Typography } from '@material-ui/core';
import PostPictureModal from '../../../PostPictureModal';
const Image = ({ picturesArr }) => {
  const [openPostPictureModal, setPostPictureModal] = useState(false);
  const classes = useStyles();
  const [pictures, setPictures] = useState({
    picturesArr: [...picturesArr],
    selectedPicture: null,
    selectedPictureIndex: null,
  });

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

  const handleRender1Picture = (picturesArr) => {
    return (
      <div
        className={classes.contentPicture}
        onClick={() => handleSetPictureSelected(picturesArr[0], 0)}
      >
        <img src={picturesArr[0]} className={classes.picture} />
      </div>
    );
  };

  const handleRender2Picture = (picturesArr) => {
    return (
      <div className={classes.containerClipPath}>
        {picturesArr.map((picture, index) => {
          return (
            <div
              className={classes.pathMax}
              onClick={() => handleSetPictureSelected(picture, index)}
              key={index}
            >
              <img src={picture} alt="post pic" />
            </div>
          );
        })}
      </div>
    );
  };

  const handleRender3Picture = (picturesArr) => {
    return (
      <>
        <div
          className={classes.contentPicture}
          onClick={() => handleSetPictureSelected(picturesArr[0], 0)}
        >
          <img
            src={picturesArr[0]}
            className={classes.picture}
            alt="post pic"
          />
        </div>
        <div
          className={classes.containerClipPath}
          style={{ margin: '0 -16px' }}
        >
          <div
            className={classes.path}
            onClick={() => handleSetPictureSelected(picturesArr[1], 1)}
          >
            <img src={picturesArr[1]} alt="post pic" />
          </div>
          <div
            className={classes.path}
            onClick={() => handleSetPictureSelected(picturesArr[2], 2)}
          >
            <img src={picturesArr[2]} alt="post pic" />
          </div>
        </div>
      </>
    );
  };

  const handleRender4Picture = (picturesArr) => {
    return (
      <div className={classes.containerClipPath}>
        {picturesArr.map((picture, index) => {
          return (
            <div
              className={classes.pathMax}
              key={index}
              onClick={() => handleSetPictureSelected(picture, index)}
            >
              <img src={picture} alt="post pic" />
            </div>
          );
        })}
      </div>
    );
  };

  const handleRender5Picture = (picturesArr) => {
    console.log(picturesArr);
    let picturesArrCopy = [...picturesArr];
    return (
      <div className={classes.containerClipPath}>
        {picturesArrCopy.slice(0, 4).map((picture, index) => {
          if (index === 3) {
            return (
              <div
                className={classes.pathMaxRelative}
                onClick={() => handleSetPictureSelected(picture, index)}
                key={index}
              >
                <img src={picture} alt="post pic" />
                <Typography className={classes.moreText}>
                  +{picturesArr.length - 4}
                </Typography>
              </div>
            );
          } else {
            return (
              <div
                className={classes.pathMax}
                onClick={() => handleSetPictureSelected(picture, index)}
                key={index}
              >
                <img src={picture} alt="post pic" />
              </div>
            );
          }
        })}
      </div>
    );
  };

  const checkHowManyPictures = () => {
    let length = picturesArr.length;
    let functionInString = `handleRender${length}Picture`;
    return eval(functionInString)(picturesArr);
  };

  const handleChangePictureFromChild = (index) => {
    setPictures({
      ...pictures,
      selectedPicture: pictures.picturesArr[index],
      selectedPictureIndex: index,
    });
  };

  return (
    picturesArr && (
      <div>
        {checkHowManyPictures()}
        {openPostPictureModal && (
          <PostPictureModal
            handleChangePictureFromChild={handleChangePictureFromChild}
            openModal={openPostPictureModal}
            pictures={pictures}
          />
        )}
      </div>
    )
  );
};

export default React.memo(Image);
