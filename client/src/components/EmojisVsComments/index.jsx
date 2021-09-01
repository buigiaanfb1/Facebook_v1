import React, { useEffect, useState, useRef } from 'react';
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
import { useSelector } from 'react-redux';
import { addReactionServices } from './modules/backendServices';
import $ from 'jquery';
import CommentInput from './CommentInput';
import OtherComments from './OtherComments';
import { sweetAlert } from '../../helpers/SweetAlert';

const EmojisVsComments = ({
  id,
  comments,
  userPostedID,
  reactions,
  userReaction,
  postID,
}) => {
  const classes = useStyles();
  const check = useRef(false);
  const currentUser = useSelector((state) => state.userStore.currentUser);
  const [reactionPicker, setReactionPicker] = useState({
    userID: null,
    userReactionOld: userReaction,
    reaction: userReaction,
    id: id,
  });

  if (currentUser) {
    reactionPicker.userID = currentUser.userID;
  }

  let vietSub = {
    like: 'Thích',
    love: 'Yêu thích',
    hug: 'Thương thương',
    haha: 'Haha',
    wow: 'Wow',
    sad: 'Buồn',
    angry: 'Phẫn nộ',
  };

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

  useEffect(() => {
    if (check.current) {
      const { avatar, username, userID } = currentUser;
      let user = {
        avatar,
        username,
        userID,
      };
      addReactionServices({ reactionPicker, userPostedID, user, postID });
    }
  }, [reactionPicker]);

  // Chọn trong Reaction Box
  const handleChooseEmoji = (e) => {
    if (currentUser) {
      let reaction = e.target.id;
      if (reaction === reactionPicker.reaction) {
        setReactionPicker({
          ...reactionPicker,
          reaction: null,
        });
      } else {
        setReactionPicker({
          ...reactionPicker,
          reaction: reaction,
          userReactionOld: reactionPicker.reaction || null,
        });
      }
      check.current = true;
    } else {
      sweetAlert('Đăng nhập để thả cảm xúc.');
    }
  };

  // Khi ấn nút like
  const handleChooseEmojiButton = (e) => {
    if (currentUser) {
      let reaction = e.target.id;
      if (reactionPicker.reaction) {
        if (reactionPicker.reaction === 'like') {
          setReactionPicker({
            ...reactionPicker,
            reaction: null,
            userReactionOld: 'like',
          });
        } else {
          setReactionPicker({
            ...reactionPicker,
            reaction: null,
            userReactionOld: reactionPicker.reaction || null,
          });
        }
      } else {
        setReactionPicker({
          ...reactionPicker,
          reaction: reaction,
          userReactionOld: null,
        });
      }
      check.current = true;
    } else {
      sweetAlert('Đăng nhập để thả cảm xúc.');
    }
  };

  const handleRenderLikeButton = () => {
    return (
      <div
        id="like"
        onClick={(e) => handleChooseEmojiButton(e)}
        className={classes.likeContainer}
      >
        <i
          className={`${classes.likeIcon} ${
            reactionPicker.reaction
              ? eval(`classes.${reactionPicker.reaction}Active`)
              : ''
          }`}
          id="like"
        ></i>
        <Typography
          className={`${classes.text} ${
            reactionPicker.reaction
              ? eval(`classes.${reactionPicker.reaction}`)
              : ''
          }`}
          id="like"
        >
          {reactionPicker.reaction ? vietSub[reactionPicker.reaction] : 'Thích'}
        </Typography>
      </div>
    );
  };

  const handleRenderReactionIconStatistics = () => {
    const {
      wow: wowA,
      like: likeA,
      sad: sadA,
      love: loveA,
      hug: hugA,
      angry: angryA,
      haha: hahaA,
    } = reactions;
    const reactionArr = [likeA, loveA, hugA, hahaA, wowA, sadA, angryA];
    let testArray = [0, 0, 9, 3, 6, 7, 3];
    let showIconArr = [];

    let vietSub = {
      0: like,
      1: love,
      2: hug,
      3: haha,
      4: wow,
      5: sad,
      6: angry,
    };

    for (let i = 0; i < 3; i++) {
      let index = -1;
      let tmp = -1;
      // có 7 reaction nên fix cứng
      for (let j = 0; j < 7; j++) {
        // reaction lớn thì gán vô tmp
        if (reactionArr[j].length > tmp && reactionArr[j].length > 0) {
          tmp = reactionArr[j].length;
          index = j;
        }
        // khi j về cuối thì gán vô showIconArr reset lại
        if (j === 6) {
          if (index > -1) {
            showIconArr.push(index);
          }
          reactionArr[index] = [];
        }
      }
    }

    return showIconArr.map((icon) => {
      return (
        <img
          src={vietSub[icon]}
          alt={`${vietSub[icon]} emoji`}
          className={classes.emoji}
        />
      );
    });
  };

  const handleRenderReactionStatistics = () => {
    if (reactions.total) {
      if (reactions.total === 1 && reactions.total > 0) {
        // check trùng user thì render "Bạn"
        return reactionPicker.reaction ? (
          <Typography className={classes.amountPeopleEmoji}>Bạn</Typography>
        ) : (
          <Typography className={classes.amountPeopleEmoji}>
            {reactions.total}
          </Typography>
        );
      } else {
        return reactionPicker.reaction ? (
          <Typography className={classes.amountPeopleEmoji}>
            Bạn và {reactions.total - 1} người khác
          </Typography>
        ) : (
          <Typography className={classes.amountPeopleEmoji}>
            {reactions.total}
          </Typography>
        );
      }
    }
  };
  return (
    <div className={classes.commentContainer}>
      {reactions ? (
        <div className={classes.emojiContainer}>
          <div className={classes.emojis}>
            <div className={classes.emojisPicture}>
              {handleRenderReactionIconStatistics()}
            </div>
            {handleRenderReactionStatistics()}
          </div>
          {/* <Typography className={classes.amountPeopleComment}>
            {comments.length > 0 ? comments.length + 'bình luận' : ''}
          </Typography> */}
        </div>
      ) : (
        ''
      )}
      <div className={classes.tools}>
        <div className={`like-btn-${id} ${classes.toolReaction}`}>
          <div className={`${classes.reactionBox}`}>
            <div
              className={`reaction-icon-${id} ${classes.reactionIcon}`}
              onClick={(e) => handleChooseEmoji(e)}
            >
              <img
                id="love"
                src={love}
                alt="Love Icon"
                className={classes.icon}
              />
              <label className={classes.label}>Yêu</label>
            </div>
            <div
              className={`reaction-icon-${id} ${classes.reactionIcon}`}
              onClick={(e) => handleChooseEmoji(e)}
            >
              <img id="hug" src={hug} alt="Hug Icon" className={classes.icon} />
              <label className={classes.label}>Thương</label>
            </div>
            <div
              className={`reaction-icon-${id} ${classes.reactionIcon}`}
              onClick={(e) => handleChooseEmoji(e)}
            >
              <img
                id="haha"
                src={haha}
                alt="Haha Icon"
                className={classes.icon}
              />
              <label className={classes.label}>Haha</label>
            </div>
            <div
              className={`reaction-icon-${id} ${classes.reactionIcon}`}
              onClick={(e) => handleChooseEmoji(e)}
            >
              <img id="wow" src={wow} alt="Wow Icon" className={classes.icon} />
              <label className={classes.label}>Wow</label>
            </div>
            <div
              className={`reaction-icon-${id} ${classes.reactionIcon}`}
              onClick={(e) => handleChooseEmoji(e)}
            >
              <img id="sad" src={sad} alt="Sad Icon" className={classes.icon} />
              <label className={classes.label}>Buồn</label>
            </div>
            <div
              className={`reaction-icon-${id} ${classes.reactionIcon}`}
              onClick={(e) => handleChooseEmoji(e)}
            >
              <img
                id="angry"
                src={angry}
                alt="Angry icon"
                className={classes.icon}
              />
              <label className={classes.label}>Tức</label>
            </div>
          </div>
          {handleRenderLikeButton()}
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
        {/* <Typography className={classes.sortText}>Tất cả câu trả lời</Typography>
        <i className={classes.sortIcon}></i> */}
      </div>
      <CommentInput postID={postID} />
      <OtherComments postID={postID} />
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
};

export default React.memo(EmojisVsComments);
