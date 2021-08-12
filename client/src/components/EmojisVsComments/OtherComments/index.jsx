import React, { useEffect, useState } from 'react';
import { projectFirestore } from '../../../firebase/config';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import Linkify from 'react-linkify';
import { vi } from 'date-fns/locale';
import { formatDistanceToNowStrict } from 'date-fns';

const OtherComments = ({ postID }) => {
  const classes = useStyles();
  const [comments, setComments] = useState(null);
  const [responseComment, setResponseCommnet] = useState();

  useEffect(() => {
    const subscriber = projectFirestore
      .collection('comments-post')
      .doc(postID)
      .onSnapshot((doc) => {
        let id = doc.id;
        // let data = { ...doc.data(), id };
        let data = { ...doc.data() };
        setComments(data);
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

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
          />
        </div>
      );
    }
  };

  const handleComments = () => {
    return comments.comments.map((comment, index) => {
      return (
        <div className={classes.commentsSection} key={comment.id}>
          <img
            src={comment.user.avatar}
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
                {comment.user.username}
              </Typography>
              <Linkify
                componentDecorator={(decoratedHref, decoratedText, key) => (
                  <a target="blank" href={decoratedHref} key={key}>
                    {decoratedText}
                  </a>
                )}
              >
                <Typography className={classes.commentOtherPeople}>
                  {comment.text}
                </Typography>
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
  return (
    <>{comments && comments.comments?.length > 0 ? handleComments() : null}</>
  );
};

export default OtherComments;
