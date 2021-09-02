import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Linkify from 'react-linkify';
import { useStyles } from '../styles';

const Comment = ({ text }) => {
  const classes = useStyles();
  const [content, setContent] = useState({
    text: '',
    hasMore: false,
  });

  useEffect(() => {
    if (text && text.length > 500) {
      if (text.length !== content.text.length) {
        setContent({
          text: text.substring(0, 500),
          hasMore: true,
        });
      }
    }
  }, [text]);

  const handleReadMore = () => {
    setContent({
      text: text,
      hasMore: false,
    });
  };

  return (
    <div className={classes.content}>
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
        {content.text.length > 0 ? (
          <>
            <Typography className={classes.commentOtherPeople}>
              {content.text}
              {content.hasMore && '... '}
            </Typography>
            {content.hasMore && (
              <Typography className={classes.readMore} onClick={handleReadMore}>
                Xem thêm
              </Typography>
            )}
          </>
        ) : (
          <Typography
            style={{ wordBreak: 'break-word' }}
            className={classes.commentOtherPeople}
          >
            {text}
          </Typography>
        )}
      </Linkify>
    </div>
  );
};

export default Comment;
