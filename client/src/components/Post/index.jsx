import React, { useEffect } from 'react';
import avatar from '../../common/images/avatar.png';
import like from '../../common/images/like.svg';
import wow from '../../common/images/wow.svg';
import haha from '../../common/images/haha.svg';
import content1 from '../../common/images/content1.jpeg';
import content2 from '../../common/images/content2.jpeg';
import content3 from '../../common/images/content3.jpeg';
import content4 from '../../common/images/content4.jpeg';
import postPicture from '../../common/images/PostPicture.jpeg';
import EmojisVsComments from '../EmojisVsComments';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { v4 as uuidv4 } from 'uuid';

const Post = () => {
  const classes = useStyles();

  const handleCheckPicture = () => {
    return (
      <div className={classes.containerClipPath}>
        <div className={classes.path}>
          <img src={avatar} />
        </div>
        <div className={classes.path}>
          <img src={postPicture} />
        </div>
      </div>
    );
  };

  const handleCheckPictureMax5 = () => {
    return (
      <div className={classes.containerClipPath}>
        <div className={classes.pathMax}>
          <img src={content1} />
        </div>
        <div className={classes.pathMax}>
          <img src={content2} />
        </div>
        <div className={classes.pathMax}>
          <img src={content3} />
        </div>
        <div className={classes.pathMax}>
          <img src={content4} />
        </div>
      </div>
    );
  };

  const handleRenderPostFake = () => {
    const arr = [1, 2, 3, 4];
    return arr.map((post, index) => {
      if (index === 0) {
        return (
          <div className={classes.container}>
            <div className={classes.avatarVsName}>
              <img src={avatar} className={classes.avatar} />
              <div className={classes.nameVsTimeContainer}>
                <Typography className={classes.name}>Nguyễn Văn A</Typography>
                <div className={classes.timeContainer}>
                  <Typography className={classes.time}>
                    13 phút trước&nbsp;·&nbsp;
                  </Typography>
                  <span className={classes.privacyIcon}></span>
                </div>
              </div>
            </div>
            <div className={classes.content}>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                in possimus culpa tenetur quae molestiae excepturi distinctio,
                fugit iste facere, provident perspiciatis maxime expedita iure
                quo corporis velit.
                <br />
                assumenda! Libero. Lorem, ipsum dolor sit amet consectetur
                adipisicing.
                <br />
                elit. Illo, totam?
              </Typography>
            </div>
            <EmojisVsComments id={index} />
          </div>
        );
      }
      if (index === 1) {
        return (
          <div className={classes.container}>
            <div className={classes.avatarVsName}>
              <img src={avatar} className={classes.avatar} />
              <div className={classes.nameVsTimeContainer}>
                <Typography className={classes.name}>Nguyễn Văn A</Typography>
                <div className={classes.timeContainer}>
                  <Typography className={classes.time}>
                    13 phút trước&nbsp;·&nbsp;
                  </Typography>
                  <span className={classes.privacyIcon}></span>
                </div>
              </div>
            </div>
            <div className={classes.contentPicture}>
              {/*  */}
              <div className={classes.contentHavePicture}>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione consequuntur quidem dicta obcaecati vel vitae
                  necessitatibus? Maiores natus voluptates quae.
                </Typography>
              </div>
              {/*  */}
              <img src={postPicture} className={classes.picture} />
              {/*  */}
            </div>
            <EmojisVsComments id={index} />
          </div>
        );
      }
      if (index === 2) {
        return (
          <div className={classes.container}>
            <div className={classes.avatarVsName}>
              <img src={avatar} className={classes.avatar} />
              <div className={classes.nameVsTimeContainer}>
                <Typography className={classes.name}>Nguyễn Văn A</Typography>
                <div className={classes.timeContainer}>
                  <Typography className={classes.time}>
                    13 phút trước&nbsp;·&nbsp;
                  </Typography>
                  <span className={classes.privacyIcon}></span>
                </div>
              </div>
            </div>
            <div className={classes.contentPicture}>
              {/*  */}
              <div className={classes.contentHavePicture}>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione consequuntur quidem dicta obcaecati vel vitae
                  necessitatibus? Maiores natus voluptates quae.
                </Typography>
              </div>
              {/*  */}
              {handleCheckPicture()}
              {/*  */}
            </div>
            <EmojisVsComments id={index} />
          </div>
        );
      } else {
        return (
          <div className={classes.container}>
            <div className={classes.avatarVsName}>
              <img src={avatar} className={classes.avatar} />
              <div className={classes.nameVsTimeContainer}>
                <Typography className={classes.name}>Nguyễn Văn A</Typography>
                <div className={classes.timeContainer}>
                  <Typography className={classes.time}>
                    13 phút trước&nbsp;·&nbsp;
                  </Typography>
                  <span className={classes.privacyIcon}></span>
                </div>
              </div>
            </div>
            <div className={classes.contentPicture}>
              {/*  */}
              <div className={classes.contentHavePicture}>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione consequuntur quidem dicta obcaecati vel vitae
                  necessitatibus? Maiores natus voluptates quae.
                </Typography>
              </div>
              {/*  */}
              {handleCheckPictureMax5()}
              {/*  */}
            </div>
            <EmojisVsComments id={index} />
          </div>
        );
      }
    });
  };

  return <>{handleRenderPostFake()}</>;
};

export default Post;
