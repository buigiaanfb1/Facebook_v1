import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import PostPictureModal from '../PostPictureModal';
import { getSubDocument } from '../../firebase/data/getDocument';

const PictureProfile = ({ profileInfo }) => {
  const classes = useStyles();
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
      let resPicturesCopy = res.pictures.slice(0, 9).reverse();
      setPictures({
        ...pictures,
        picturesArr: resPicturesCopy,
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

  const handleRenderPicture = () => {
    return pictures.picturesArr.map((image, index) => {
      index++;
      if (pictures.picturesArr.length === 1) {
        return (
          <div
            className={classes.containerImage}
            onClick={() => handleSetPictureSelected(image, index)}
          >
            <img src={image} className={classes.image4Radius} />
          </div>
        );
      } else if (pictures.picturesArr.length === 2) {
        if (index === 1) {
          return (
            <div
              className={classes.containerImage}
              onClick={() => handleSetPictureSelected(image, index)}
            >
              <img
                src={image}
                className={classes.image2TopLeftBottomLeftRadius}
              />
            </div>
          );
        } else {
          return (
            <div
              className={classes.containerImage}
              onClick={() => handleSetPictureSelected(image, index)}
            >
              <img
                src={image}
                className={classes.image2TopRightBottomRightRadius}
              />
            </div>
          );
        }
      } else if (
        pictures.picturesArr.length === 3 ||
        pictures.picturesArr.length === 6
      ) {
        if (pictures.picturesArr.length === 3) {
          if (index == pictures.picturesArr.length - 1) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image0Radius} />
              </div>
            );
          } else if (index % 3 !== 0) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img
                  src={image}
                  className={classes.image2TopLeftBottomLeftRadius}
                />
              </div>
            );
          } else {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img
                  src={image}
                  className={classes.image2TopRightBottomRightRadius}
                />
              </div>
            );
          }
        } else {
          if (index === 1) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1TopLeftRadius} />
              </div>
            );
          } else if (index === 3) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1TopRightRadius} />
              </div>
            );
          } else if (index === 4) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1BottomLeftRadius} />
              </div>
            );
          } else if (index === 6) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1BottomRightRadius} />
              </div>
            );
          } else {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image0Radius} />
              </div>
            );
          }
        }
      } else if (
        pictures.picturesArr.length === 4 ||
        pictures.picturesArr.length === 7
      ) {
        if (pictures.picturesArr.length === 4) {
          if (index === 1) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1TopLeftRadius} />
              </div>
            );
          } else if (index === 3) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img
                  src={image}
                  className={classes.image2TopRightBottomRightRadius}
                />
              </div>
            );
          } else if (index === 4) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img
                  src={image}
                  className={classes.image2BottomRightBottomLeftRadius}
                />
              </div>
            );
          } else {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image0Radius} />
              </div>
            );
          }
        } else {
          if (index === 1) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1TopLeftRadius} />
              </div>
            );
          } else if (index === 3) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1TopRightRadius} />
              </div>
            );
          } else if (index === 6) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1BottomRightRadius} />
              </div>
            );
          } else if (index === 7) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img
                  src={image}
                  className={classes.image2BottomRightBottomLeftRadius}
                />
              </div>
            );
          } else {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image0Radius} />
              </div>
            );
          }
        }
      } else if (
        pictures.picturesArr.length === 5 ||
        pictures.picturesArr.length === 8
      ) {
        if (pictures.picturesArr.length === 5) {
          if (index === 1) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1TopLeftRadius} />
              </div>
            );
          } else if (index === 3) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img
                  src={image}
                  className={classes.image2TopRightBottomRightRadius}
                />
              </div>
            );
          } else if (index === 4) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1BottomLeftRadius} />
              </div>
            );
          } else if (index === 5) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1BottomRightRadius} />
              </div>
            );
          } else {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image0Radius} />
              </div>
            );
          }
        } else if (pictures.picturesArr.length === 8) {
          if (index === 1) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1TopLeftRadius} />
              </div>
            );
          } else if (index === 3) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1TopRightRadius} />
              </div>
            );
          } else if (index === 6 || index === 8) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1BottomRightRadius} />
              </div>
            );
          } else if (index === 7) {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image1BottomLeftRadius} />
              </div>
            );
          } else {
            return (
              <div
                className={classes.containerImage}
                onClick={() => handleSetPictureSelected(image, index)}
              >
                <img src={image} className={classes.image0Radius} />
              </div>
            );
          }
        }
      } else {
        if (index === 1) {
          return (
            <div
              className={classes.containerImage}
              onClick={() => handleSetPictureSelected(image, index)}
            >
              <img
                src={image}
                className={classes.image1TopLeftRadius}
                onClick={() => handleOpenModalPicture()}
              />
            </div>
          );
        } else if (index === 3) {
          return (
            <div
              className={classes.containerImage}
              onClick={() => handleSetPictureSelected(image, index)}
            >
              <img src={image} className={classes.image1TopRightRadius} />
            </div>
          );
        } else if (index === 7) {
          return (
            <div
              className={classes.containerImage}
              onClick={() => handleSetPictureSelected(image, index)}
            >
              <img src={image} className={classes.image1BottomLeftRadius} />
            </div>
          );
        } else if (index === 9) {
          return (
            <div
              className={classes.containerImage}
              onClick={() => handleSetPictureSelected(image, index)}
            >
              <img src={image} className={classes.image1BottomRightRadius} />
            </div>
          );
        } else {
          return (
            <div
              className={classes.containerImage}
              onClick={() => handleSetPictureSelected(image, index)}
            >
              <img src={image} className={classes.image0Radius} />
            </div>
          );
        }
      }
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Ảnh cá nhân</Typography>
        <Typography className={classes.linkAll}>Xem tất cả ảnh</Typography>
      </div>
      <div className={classes.imagesContainer}>
        {pictures.picturesArr ? handleRenderPicture() : null}
      </div>
      {/* ModalPicture */}
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

export default React.memo(PictureProfile);
