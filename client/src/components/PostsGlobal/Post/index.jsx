import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { formatDistanceToNowStrict } from 'date-fns';
import { vi } from 'date-fns/locale';
import EmojisVsComments from '../../EmojisVsComments';
import { getUser } from '../../../firebase/data/currentUser';
import { projectFirestore } from '../../../firebase/config';
import Image from './Image';
import { Link } from 'react-router-dom';
import Linkify from 'react-linkify';

const Post = ({ post }) => {
  const classes = useStyles();
  const [state, setState] = useState({ post, first: false });
  const [content, setContent] = useState({
    text: '',
    hasMore: false,
  });
  const { res } = getUser();
  const avatarDefault =
    'https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/default%2Favatar-default.jpeg?alt=media&token=a1f34410-3760-4666-a3b0-e59e8444f8b0';

  useEffect(() => {
    // gán vào biến subcriber để khi component will unmount
    // sẽ đóng bandwidth không listen nữa tránh ảnh hưởng performance
    const subscriber = projectFirestore
      .collection('posts')
      .doc(state.post.id)
      .onSnapshot((doc) => {
        let id = doc.id;
        let data = { ...doc.data(), id };
        setState({
          post: data,
        });
        // }
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  useEffect(() => {
    if (state.post.content && state.post.content.length > 500) {
      if (state.post.content.length !== content.text.length) {
        let subContent = { ...state.post };
        setContent({
          text: subContent.content.substring(0, 500),
          hasMore: true,
        });
      }
    }
  }, [state]);

  const handleReadMore = () => {
    setContent({
      text: state.post.content,
      hasMore: false,
    });
  };

  const handleGetReaction = (post) => {
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
                id={state.post.id}
                comments={state.post.comments}
                reactions={state.post.reaction}
                userReaction={indexReaction[i]}
                userPostedID={state.post.userID}
                postID={state.post.id}
              />
            );
          }
        }
      }
    }
    return (
      <EmojisVsComments
        id={state.post.id}
        userPostedID={state.post.userID}
        comments={state.post.comments}
        reactions={state.post.reaction}
        userReaction={null}
        postID={state.post.id}
      />
    );
  };

  const handleRenderTime = () => {
    if (state.post && state.post.createdAt) {
      let date = new Date(state.post?.createdAt);
      date.toISOString().substring(0, 10);
      let time = formatDistanceToNowStrict(date, {
        locale: vi,
      });
      return time;
    }
  };

  const handleRenderPresetsOrNormal = () => {
    if (state.post.backgroundPresetsUri) {
      return (
        <div className={classes.content}>
          <img
            src={state.post.backgroundPresetsUri}
            className={classes.presetsBackground}
            alt="preset"
          />
          <Linkify
            componentDecorator={(decoratedHref, decoratedText, key) => (
              <a target="blank" href={decoratedHref} key={key}>
                {decoratedText}
              </a>
            )}
          >
            <Typography
              style={{
                wordBreak: 'break-word',
                color: `#${
                  state.post.color === 'FF000000' ? '000' : state.post.color
                }`,
              }}
              className={classes.textPresets}
            >
              {state.post.content}
            </Typography>
          </Linkify>
        </div>
      );
    } else {
      return (
        <div className={classes.content}>
          <Linkify
            componentDecorator={(decoratedHref, decoratedText, key) => (
              <a target="blank" href={decoratedHref} key={key}>
                {decoratedText}
              </a>
            )}
          >
            {content.text.length > 0 ? (
              <>
                <Typography
                  style={{ wordBreak: 'break-word', display: 'inline' }}
                >
                  {content.text}
                  {content.hasMore && '... '}
                </Typography>
                {content.hasMore && (
                  <Typography
                    className={classes.readMore}
                    onClick={handleReadMore}
                  >
                    Xem thêm
                  </Typography>
                )}
              </>
            ) : (
              <Typography style={{ wordBreak: 'break-word' }}>
                {state.post.content}
              </Typography>
            )}
          </Linkify>
          {state.post.picture.length > 0 && (
            <Image picturesArr={state.post.picture} />
          )}
        </div>
      );
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.avatarVsName}>
        <Link to={`profile/${state.post.userID}`}>
          <img
            src={state.post.avatar ? state.post.avatar : avatarDefault}
            className={classes.avatar}
            alt="default"
          />
        </Link>
        <div className={classes.nameVsTimeContainer}>
          <Link to={`profile/${state.post.userID}`}>
            <Typography className={classes.name}>
              {state.post.username}
            </Typography>
          </Link>
          <div className={classes.timeContainer}>
            <Typography
              className={classes.time}
              onClick={() => {
                console.log(post);
              }}
            >
              {handleRenderTime()}&nbsp;·&nbsp;
            </Typography>
            <span className={classes.privacyIcon}></span>
          </div>
        </div>
      </div>
      {handleRenderPresetsOrNormal()}
      {handleGetReaction(state.post)}
    </div>
  );
};

export default React.memo(Post);
