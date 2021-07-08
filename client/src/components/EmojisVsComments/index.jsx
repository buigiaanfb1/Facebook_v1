import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import avatar from '../../common/images/avatar.png';
import like from '../../common/images/like.svg';
import wow from '../../common/images/wow.svg';
import haha from '../../common/images/haha.svg';
import love from '../../common/images/love.svg';
import hug from '../../common/images/hug.svg';
import sad from '../../common/images/sad.svg';
import angry from '../../common/images/angry.svg';
import { Typography } from '@material-ui/core';
import $ from 'jquery';

const EmojisVsComments = ({ id, comments, reaction }) => {
  const classes = useStyles();

  useEffect(() => {
    $(function () {
      $(`.like-btn-${id}`).hover(
        function () {
          $(`.reaction-icon-${id}`).each(function (index, element) {
            setTimeout(function () {
              $(element).addClass('show');
            }, index * 100);
          });
        },
        function () {
          $(`.reaction-icon-${id}`).removeClass('show');
        }
      );
    });
  }, []);

  const handleComments = () => {
    if (comments && comments.length > 0) {
      return comments.map((comment, index) => {
        return (
          <div className={classes.commentsSection}>
            <img src={avatar} className={classes.avatarOtherPeople} />
            <div className={classes.nameVsCommentVsToolsContainer}>
              <div className={classes.nameVsComment}>
                <Typography className={classes.nameOtherPeople}>
                  Nguyễn Văn A
                </Typography>
                <Typography className={classes.commentOtherPeople}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
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
        );
      });
    }
  };

  return (
    <div className={classes.commentContainer}>
      <div className={classes.emojiContainer}>
        <div className={classes.emojis}>
          <div className={classes.emojisPicture}>
            <img src={like} alt="like emoji" className={classes.emoji} />
            <img src={haha} alt="haha emoji" className={classes.emoji} />
            <img src={wow} alt="hug emoji" className={classes.emoji} />
          </div>
          <Typography className={classes.amountPeopleEmoji}>
            Bạn và 7 người khác
          </Typography>
        </div>
        <Typography className={classes.amountPeopleComment}>
          8 người bình luận
        </Typography>
      </div>
      <div className={classes.tools}>
        <div className={`like-btn-${id} ${classes.toolReaction}`}>
          <div className={`${classes.reactionBox}`}>
            <div className={`reaction-icon-${id} ${classes.reactionIcon}`}>
              <img src={like} alt="Like Icon" className={classes.icon} />
              <label className={classes.label}>Thích</label>
            </div>
            <div className={`reaction-icon-${id} ${classes.reactionIcon}`}>
              <img src={love} alt="Love Icon" className={classes.icon} />
              <label className={classes.label}>Yêu</label>
            </div>
            <div className={`reaction-icon-${id} ${classes.reactionIcon}`}>
              <img src={hug} alt="Hug Icon" className={classes.icon} />
              <label className={classes.label}>Thương</label>
            </div>
            <div className={`reaction-icon-${id} ${classes.reactionIcon}`}>
              <img src={haha} alt="Haha Icon" className={classes.icon} />
              <label className={classes.label}>Haha</label>
            </div>
            <div className={`reaction-icon-${id} ${classes.reactionIcon}`}>
              <img src={wow} alt="Wow Icon" className={classes.icon} />
              <label className={classes.label}>Wow</label>
            </div>
            <div className={`reaction-icon-${id} ${classes.reactionIcon}`}>
              <img src={sad} alt="Sad Icon" className={classes.icon} />
              <label className={classes.label}>Buồn</label>
            </div>
            <div className={`reaction-icon-${id} ${classes.reactionIcon}`}>
              <img src={angry} alt="Angry icon" className={classes.icon} />
              <label className={classes.label}>Tức</label>
            </div>
          </div>
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
        <Typography className={classes.sortText}>Tất cả câu trả lời</Typography>
        <i className={classes.sortIcon}></i>
      </div>
      {handleComments()}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className={classes.yourThinking}>
        <img src={avatar} className={classes.avatarOtherPeople} />
        <input className={classes.input} placeholder="Viết câu trả lời..." />
      </div>
    </div>
  );
};

export default EmojisVsComments;
