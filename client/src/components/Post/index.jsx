import React, { useEffect } from 'react';
import EmojisVsComments from '../EmojisVsComments';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { v4 as uuidv4 } from 'uuid';
import FacebookStyle from '../../componentsLoader/PostLoader';
import { formatDistanceToNowStrict } from 'date-fns';
import { vi } from 'date-fns/locale';

const Post = ({ posts }) => {
  const classes = useStyles();

  const handleRender1Picture = (picturesArr) => {
    return (
      <div className={classes.contentPicture}>
        <img src={picturesArr[0]} className={classes.picture} />
      </div>
    );
  };

  const handleRender2Picture = (picturesArr) => {
    return (
      <div className={classes.containerClipPath}>
        <div className={classes.path}>
          <img src={picturesArr[0]} />
        </div>
        <div className={classes.path}>
          <img src={picturesArr[1]} />
        </div>
      </div>
    );
  };

  const handleRender3Picture = (picturesArr) => {
    return (
      <>
        <div className={classes.contentPicture}>
          <img src={picturesArr[0]} className={classes.picture} />
        </div>
        <div
          className={classes.containerClipPath}
          style={{ margin: '0 -16px' }}
        >
          <div className={classes.path}>
            <img src={picturesArr[1]} />
          </div>
          <div className={classes.path}>
            <img src={picturesArr[2]} />
          </div>
        </div>
      </>
    );
  };

  const handleRender4Picture = (picturesArr) => {
    return (
      <div className={classes.containerClipPath}>
        <div className={classes.pathMax}>
          <img src={picturesArr[0]} />
        </div>
        <div className={classes.pathMax}>
          <img src={picturesArr[1]} />
        </div>
        <div className={classes.pathMax}>
          <img src={picturesArr[2]} />
        </div>
        <div className={classes.pathMax}>
          <img src={picturesArr[3]} />
        </div>
      </div>
    );
  };

  const handleRender5Picture = (picturesArr) => {
    return (
      <div className={classes.containerClipPath}>
        <div className={classes.pathMax}>
          <img src={picturesArr[0]} />
        </div>
        <div className={classes.pathMax}>
          <img src={picturesArr[1]} />
        </div>
        <div className={classes.pathMax}>
          <img src={picturesArr[2]} />
        </div>
        <div className={classes.pathMaxRelative}>
          <img src={picturesArr[3]} />
          <Typography className={classes.moreText}>+1</Typography>
        </div>
      </div>
    );
  };

  const checkHowManyPictures = (picturesArr) => {
    if (picturesArr && picturesArr.length > 0) {
      let length = picturesArr.length;
      let functionInString = `handleRender${length}Picture`;
      return eval(functionInString)(picturesArr);
    }
  };

  const avatarDefault =
    'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default%2Favatar-default.jpeg?alt=media&token=a1f34410-3760-4666-a3b0-e59e8444f8b0';

  const handleRenderPostFake = (posts) => {
    return posts
      .slice(0)
      .reverse()
      .map((post, index) => {
        let time = formatDistanceToNowStrict(post.createdAt.toDate(), {
          locale: vi,
        });
        return (
          <div className={classes.container}>
            <div className={classes.avatarVsName}>
              <img
                src={post.avatar ? post.avatar : avatarDefault}
                className={classes.avatar}
              />
              <div className={classes.nameVsTimeContainer}>
                <Typography className={classes.name}>
                  {post.username}
                </Typography>
                <div className={classes.timeContainer}>
                  <Typography className={classes.time}>
                    {time}&nbsp;·&nbsp;
                  </Typography>
                  <span className={classes.privacyIcon}></span>
                </div>
              </div>
            </div>
            <div className={classes.content}>
              <Typography>{post.content}</Typography>
              {checkHowManyPictures(post.picture)}
            </div>
            <EmojisVsComments
              id={index}
              comments={post.comments}
              reaction={post.reaction}
            />
          </div>
        );
      });
  };

  const handleNothing = () => {
    return (
      <>
        <FacebookStyle />
        <FacebookStyle />
        <FacebookStyle />
      </>
    );
  };

  return <>{posts ? handleRenderPostFake(posts) : handleNothing()}</>;
};

export default Post;
