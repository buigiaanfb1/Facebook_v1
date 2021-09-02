import React, { useEffect, useState, useRef } from 'react';
import { projectFirestore } from '../../../firebase/config';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import Linkify from 'react-linkify';
import { vi } from 'date-fns/locale';
import { formatDistanceToNowStrict } from 'date-fns';
import WallpaperVsAvatarModal from '../../WallpaperVsAvatarModal';
import Comment from './Comment';

const OtherComments = ({ postID }) => {
  const classes = useStyles();
  const first = useRef(true);
  const [comments, setComments] = useState(null);
  const [openPostPictureModal, setPostPictureModal] = useState({
    open: false,
    picture: null,
  });
  const [state, setState] = useState({
    items: [],
    hasMore: false,
  });

  useEffect(() => {
    const subscriber = projectFirestore
      .collection('comments-post')
      .doc(postID)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let data = doc.data().comments.slice().reverse();
          setComments(data);
        }
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  useEffect(() => {
    if (first.current) {
      if (comments && comments.length > 5) {
        setState({
          hasMore: true,
          items: comments.slice(0, 5),
        });
        first.current = false;
      } else if (comments) {
        setState({
          hasMore: false,
          items: comments.slice(0, comments.length) || [],
        });
        first.current = false;
      }
    } else {
      if (comments && comments.length > 5) {
        setState({
          hasMore: true,
          items: [comments[0], ...state.items],
        });
      } else if (comments) {
        setState({
          hasMore: false,
          items: comments.slice(0, comments.length) || [],
        });
      }
    }
  }, [comments]);

  const fetchData = () => {
    // loaded.current = true;
    if (state.items.length >= comments.length || 0) {
      setState({
        ...state,
        hasMore: false,
      });
      return;
    }

    if (comments && comments.length > 5) {
      setTimeout(() => {
        setState({
          ...state,
          items: state.items.concat(
            comments.slice(state.items.length, state.items.length + 5)
          ),
        });
      }, 500);
    } else {
      setTimeout(() => {
        setState({
          ...state,
          items: state.items.concat(
            comments.slice(
              state.items.length,
              comments.length - state.items.length
            )
          ),
        });
      }, 500);
    }
  };

  const listenModalChildren = (close) => {
    if (!close) {
      setPostPictureModal({
        open: false,
        picture: null,
      });
    }
  };

  // mở Modal
  const handleOpenModalPicture = (picture) => {
    setPostPictureModal({
      open: true,
      picture: picture,
    });
  };

  const handleRenderTime = (comment) => {
    if (comment.createdAt) {
      let date = comment.createdAt.toDate();
      let time = formatDistanceToNowStrict(date, {
        locale: vi,
      });
      return time;
    }
  };

  const handleRenderPicture = (image) => {
    if (image.length > 0) {
      return (
        <div>
          <img
            src={image[0]}
            width="60%"
            className={classes.imageOtherComment}
            alt="comment pic"
            onClick={() => handleOpenModalPicture(image[0])}
          />
        </div>
      );
    }
  };

  const handleComments = () => {
    return state.items.map((comment, index) => {
      return (
        <div className={classes.commentsSection} key={comment.id}>
          <img
            src={comment.user?.avatar}
            className={classes.avatarOtherPeople}
            alt="avatar pic"
          />
          <div className={classes.nameVsCommentVsToolsContainer}>
            <div
              className={
                (comment.imageBlob.length > 0 && comment.text.length > 0) ||
                comment.text.length > 0
                  ? classes.nameVsComment
                  : classes.nameVsCommentWithOutBgColor
              }
            >
              <Typography className={classes.nameOtherPeople}>
                {comment.user?.username}
              </Typography>
              <Linkify
                componentDecorator={(decoratedHref, decoratedText, key) => (
                  <a
                    target="blank"
                    href={decoratedHref}
                    key={key}
                    className={classes.linkify}
                  >
                    {decoratedText}
                  </a>
                )}
              >
                {comment.text && <Comment text={comment.text} />}
              </Linkify>
            </div>
            {handleRenderPicture(comment.imageBlob)}
            <div className={classes.toolsComment}>
              <Typography className={classes.toolsCommentText}>
                Thích&nbsp;&nbsp;·&nbsp;
              </Typography>
              <Typography className={classes.toolsCommentText}>
                &nbsp;Phản hồi&nbsp;&nbsp;·&nbsp;
              </Typography>
              <Typography className={classes.toolsCommentText}>
                &nbsp;Chia sẻ&nbsp;&nbsp;·&nbsp;
              </Typography>
              <Typography className={classes.timeComment}>
                &nbsp;{handleRenderTime(comment)}
              </Typography>
            </div>
          </div>
        </div>
      );
    });
  };
  return state.items.length > 0 ? (
    <div style={{ marginTop: '0.5rem' }}>
      {handleComments()}
      {state.hasMore && (
        <Typography className={classes.readMore} onClick={fetchData}>
          Xem thêm bình luận
        </Typography>
      )}
      {openPostPictureModal.open && (
        <WallpaperVsAvatarModal
          openModal={openPostPictureModal.open}
          picture={openPostPictureModal.picture}
          listenModalChildren={listenModalChildren}
        />
      )}
    </div>
  ) : null;
};

export default OtherComments;
