import React, { useState } from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { formatDistanceToNowStrict } from 'date-fns';
import { vi } from 'date-fns/locale';
import EmojisVsComments from '../../EmojisVsComments';
import { getUser } from '../../../firebase/data/currentUser';

const Post = ({ post }) => {
  const classes = useStyles();
  const { res } = getUser();
  console.log(post);
  const avatarDefault =
    'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default%2Favatar-default.jpeg?alt=media&token=a1f34410-3760-4666-a3b0-e59e8444f8b0';

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

  const handleGetReaction = (post) => {
    //
    const { wow, like, sad, love, hug, angry, haha } = post.reaction;
    //
    const multiArrReaction = [like, love, hug, haha, wow, sad, angry];
    let indexReaction = {
      0: 'like',
      1: 'love',
      2: 'hug',
      3: 'haha',
      4: 'wow',
      5: 'sad',
      6: 'angry',
    };
    //
    for (let i = 0; i < multiArrReaction.length; i++) {
      // 2 dimension array
      if (multiArrReaction[i].length > 0) {
        // if arr > 0 continue
        let specificReaction = multiArrReaction[i];
        for (let j = 0; j < multiArrReaction[i]?.length; i++) {
          // check if duplicate id so the user is liked
          if (res?.uid === specificReaction[j].userID) {
            return (
              <EmojisVsComments
                id={post.id}
                comments={post.comments}
                reactions={post.reaction}
                userReaction={indexReaction[i]}
                userPostedID={post.userID}
              />
            );
          }
        }
      }
    }
    return (
      <EmojisVsComments
        id={post.id}
        userPostedID={post.userID}
        comments={post.comments}
        reactions={post.reaction}
        userReaction={null}
      />
    );
  };

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
          <Typography className={classes.name}>{post.username}</Typography>
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
      {handleGetReaction(post)}
    </div>
  );
};

export default React.memo(Post);