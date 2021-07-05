import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import content1 from '../../common/images/test2.jpeg';
import content2 from '../../common/images/content2.jpeg';
import content3 from '../../common/images/content3.jpeg';
import content4 from '../../common/images/content4.jpeg';
import PostPictureModal from '../PostPictureModal';

const PictureProfile = () => {
  const classes = useStyles();
  const [openPostPictureModal, setPostPictureModal] = useState(false);
  // mở Modal
  const handleOpenModalPicture = () => {
    setPostPictureModal({
      openPostPictureModal: true,
    });
  };

  const handleRenderPicture = () => {
    const arr = [
      content1,
      content2,
      content3,
      content4,
      content1,
      content2,
      content3,
      content4,
      content1,
    ];
    return arr.map((image, index) => {
      index++;
      if (arr.length === 1) {
        return <img key={index} src={image} className={classes.image4Radius} />;
      } else if (arr.length === 2) {
        if (index === 1) {
          return (
            <img
              key={index}
              src={image}
              className={classes.image2TopLeftBottomLeftRadius}
            />
          );
        } else {
          return (
            <img
              key={index}
              src={image}
              className={classes.image2TopRightBottomRightRadius}
            />
          );
        }
      } else if (arr.length === 3 || arr.length === 6) {
        if (arr.length === 3) {
          if (index == arr.length - 1) {
            return (
              <img key={index} src={image} className={classes.image0Radius} />
            );
          } else if (index % 3 !== 0) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image2TopLeftBottomLeftRadius}
              />
            );
          } else {
            return (
              <img
                key={index}
                src={image}
                className={classes.image2TopRightBottomRightRadius}
              />
            );
          }
        } else {
          if (index === 1) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1TopLeftRadius}
              />
            );
          } else if (index === 3) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1TopRightRadius}
              />
            );
          } else if (index === 4) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1BottomLeftRadius}
              />
            );
          } else if (index === 6) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1BottomRightRadius}
              />
            );
          } else {
            return (
              <img key={index} src={image} className={classes.image0Radius} />
            );
          }
        }
      } else if (arr.length === 4 || arr.length === 7) {
        if (arr.length === 4) {
          if (index === 1) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1TopLeftRadius}
              />
            );
          } else if (index === 3) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image2TopRightBottomRightRadius}
              />
            );
          } else if (index === 4) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image2BottomRightBottomLeftRadius}
              />
            );
          } else {
            return (
              <img key={index} src={image} className={classes.image0Radius} />
            );
          }
        } else {
          if (index === 1) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1TopLeftRadius}
              />
            );
          } else if (index === 3) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1TopRightRadius}
              />
            );
          } else if (index === 6) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1BottomRightRadius}
              />
            );
          } else if (index === 7) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image2BottomRightBottomLeftRadius}
              />
            );
          } else {
            return (
              <img key={index} src={image} className={classes.image0Radius} />
            );
          }
        }
      } else if (arr.length === 5 || arr.length === 8) {
        if (arr.length === 5) {
          if (index === 1) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1TopLeftRadius}
              />
            );
          } else if (index === 3) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image2TopRightBottomRightRadius}
              />
            );
          } else if (index === 4) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1BottomLeftRadius}
              />
            );
          } else if (index === 5) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1BottomRightRadius}
              />
            );
          } else {
            return (
              <img key={index} src={image} className={classes.image0Radius} />
            );
          }
        } else if (arr.length === 8) {
          if (index === 1) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1TopLeftRadius}
              />
            );
          } else if (index === 3) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1TopRightRadius}
              />
            );
          } else if (index === 6 || index === 8) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1BottomRightRadius}
              />
            );
          } else if (index === 7) {
            return (
              <img
                key={index}
                src={image}
                className={classes.image1BottomLeftRadius}
              />
            );
          } else {
            return (
              <img key={index} src={image} className={classes.image0Radius} />
            );
          }
        }
      } else {
        if (index === 1) {
          return (
            <img
              key={index}
              src={image}
              className={classes.image1TopLeftRadius}
              onClick={() => handleOpenModalPicture()}
            />
          );
        } else if (index === 3) {
          return (
            <img
              key={index}
              src={image}
              className={classes.image1TopRightRadius}
            />
          );
        } else if (index === 7) {
          return (
            <img
              key={index}
              src={image}
              className={classes.image1BottomLeftRadius}
            />
          );
        } else if (index === 9) {
          return (
            <img
              key={index}
              src={image}
              className={classes.image1BottomRightRadius}
            />
          );
        } else {
          return (
            <img key={index} src={image} className={classes.image0Radius} />
          );
        }
      }
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Ảnh</Typography>
        <Typography className={classes.linkAll}>Xem tất cả ảnh</Typography>
      </div>
      <div className={classes.imagesContainer}>{handleRenderPicture()}</div>
      {/* ModalPicture */}
      <PostPictureModal openModal={openPostPictureModal} />
    </div>
  );
};

export default PictureProfile;
