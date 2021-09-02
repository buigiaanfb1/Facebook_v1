import React from 'react';
import avatar from '../../common/images/avatar.png';
import like from '../../common/images/like.svg';
import wow from '../../common/images/wow.svg';
import haha from '../../common/images/haha.svg';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Linkify from 'react-linkify';

const PostNoImage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.avatarVsName}>
          <img src={avatar} className={classes.avatar} />
          <div className={classes.nameVsTimeContainer}>
            <Typography className={classes.name}>
              This project is only for learning purpose
            </Typography>
            <div className={classes.timeContainer}>
              <Typography className={classes.time}>
                2 tháng trước&nbsp;·&nbsp;
              </Typography>
              <span className={classes.privacyIcon}></span>
            </div>
          </div>
        </div>

        <div className={classes.content}>
          <Typography>This project is only for learning purpose.</Typography>
        </div>
        <div className={classes.commentContainer}>
          <div className={classes.emojiContainer}>
            <div className={classes.emojis}>
              <div className={classes.emojisPicture}>
                <img src={like} alt="like emoji" className={classes.emoji} />
                <img src={haha} alt="haha emoji" className={classes.emoji} />
                <img src={wow} alt="hug emoji" className={classes.emoji} />
              </div>
              <Typography className={classes.amountPeopleEmoji}>
                999 người khác
              </Typography>
            </div>
            <Typography className={classes.amountPeopleComment}>
              1 người bình luận
            </Typography>
          </div>
          <div className={classes.tools}>
            <div className={classes.tool}>
              <i className={classes.like}></i>
              <Typography className={classes.text}>Thích</Typography>
            </div>
            <div className={classes.tool}>
              <i className={classes.comment}></i>
              <Typography className={classes.text}>Trả lời</Typography>
            </div>
            <div className={classes.tool}>
              <i className={classes.share}></i>
              <Typography className={classes.text}>Chia sẻ</Typography>
            </div>
          </div>
          <div className={classes.sortContainer}>
            <Typography className={classes.sortText}>
              Tất cả câu trả lời
            </Typography>
            <i className={classes.sortIcon}></i>
          </div>
          <div className={classes.commentsSection}>
            <img src={haha} className={classes.avatarOtherPeople} />
            <div className={classes.nameVsCommentVsToolsContainer}>
              <div className={classes.nameVsComment}>
                <Typography className={classes.nameOtherPeople}>
                  Gia An
                </Typography>
                <Linkify
                  componentDecorator={(decoratedHref, decoratedText, key) => (
                    <a target="blank" href={decoratedHref} key={key}>
                      {decoratedText}
                    </a>
                  )}
                >
                  <Typography className={classes.commentOtherPeople}>
                    App nghe nhạc: zingmp3clone.netlify.app
                  </Typography>
                  <Typography className={classes.commentOtherPeople}>
                    Blog: https://chiaseitdev.com/
                  </Typography>
                </Linkify>
              </div>
              <div className={classes.toolsComment}>
                <Typography className={classes.toolsCommentText}>
                  Thích&nbsp;&nbsp;·&nbsp;
                </Typography>
                <Typography className={classes.toolsCommentText}>
                  &nbsp;Trả lời&nbsp;&nbsp;·&nbsp;
                </Typography>
                <Typography className={classes.toolsCommentText}>
                  &nbsp;Chia sẻ&nbsp;&nbsp;·&nbsp;
                </Typography>
                <Typography className={classes.timeComment}>
                  &nbsp;3 giờ
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.commentsSection}>
            <img src={haha} className={classes.avatarOtherPeople} />
            <div className={classes.nameVsCommentVsToolsContainer}>
              <div className={classes.nameVsComment}>
                <Typography className={classes.nameOtherPeople}>
                  Gia An
                </Typography>
                <Linkify
                  componentDecorator={(decoratedHref, decoratedText, key) => (
                    <a target="blank" href={decoratedHref} key={key}>
                      {decoratedText}
                    </a>
                  )}
                >
                  <Typography className={classes.commentOtherPeople}>
                    Hiện tại mình rất cần một công ty để thực tập, công ty nào
                    đang cần thì liên hệ với mình mình gửi CV, mình cảm ơn!
                  </Typography>
                  <br />
                  <Typography className={classes.commentOtherPeople}>
                    Github: https://github.com/buigiaanfb1
                  </Typography>
                  <Typography className={classes.commentOtherPeople}>
                    Facebook: https://www.facebook.com/anbui.dev/
                  </Typography>
                </Linkify>
              </div>
              <div className={classes.toolsComment}>
                <Typography className={classes.toolsCommentText}>
                  Thích&nbsp;&nbsp;·&nbsp;
                </Typography>
                <Typography className={classes.toolsCommentText}>
                  &nbsp;Trả lời&nbsp;&nbsp;·&nbsp;
                </Typography>
                <Typography className={classes.toolsCommentText}>
                  &nbsp;Chia sẻ&nbsp;&nbsp;·&nbsp;
                </Typography>
                <Typography className={classes.timeComment}>
                  &nbsp;3 giờ
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostNoImage;
