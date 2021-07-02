import React from 'react';
import avatar from '../../common/images/avatar.png';
import like from '../../common/images/like.svg';
import wow from '../../common/images/wow.svg';
import haha from '../../common/images/haha.svg';
import content1 from '../../common/images/content1.jpeg';
import content2 from '../../common/images/content2.jpeg';
import content3 from '../../common/images/content3.jpeg';
import content4 from '../../common/images/content4.jpeg';
import postPicture from '../../common/images/PostPicture.jpeg';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

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

  return (
    <>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt in
            possimus culpa tenetur quae molestiae excepturi distinctio, fugit
            iste facere, provident perspiciatis maxime expedita iure quo
            corporis velit.
            <br />
            assumenda! Libero. Lorem, ipsum dolor sit amet consectetur
            adipisicing.
            <br />
            elit. Illo, totam?
          </Typography>
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
                Bạn và 7 người khác
              </Typography>
            </div>
            <Typography className={classes.amountPeopleComment}>
              8 người bình luận
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
                  Nguyễn Văn A
                </Typography>
                <Typography className={classes.commentOtherPeople}>
                  Lorem ipsum dolor sit amet.
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
          <div className={classes.commentsSection}>
            <img src={avatar} className={classes.avatarOtherPeople} />
            <div className={classes.nameVsCommentVsToolsContainer}>
              <div className={classes.nameVsComment}>
                <Typography className={classes.nameOtherPeople}>
                  Nguyễn Văn A
                </Typography>
                <Typography className={classes.commentOtherPeople}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore fugiat quidem quas magnam? Beatae, accusamus est
                  perspiciatis eligendi tenetur libero sint adipisci laudantium
                  qui nobis dolorem quo vero. Delectus quibusdam possimus
                  numquam eum perspiciatis? Earum esse fuga voluptas placeat
                  eos, impedit dolor in soluta, ut vitae libero voluptates. Non,
                  quos.
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
          {/*  */}
          {/*  */}
          {/*  */}
          <div className={classes.yourThinking}>
            <img src={avatar} className={classes.avatarOtherPeople} />
            <input
              className={classes.input}
              placeholder="Viết câu trả lời..."
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur quidem dicta obcaecati vel vitae necessitatibus?
              Maiores natus voluptates quae.
            </Typography>
          </div>
          {/*  */}
          <img src={postPicture} className={classes.picture} />
          {/*  */}
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
                Bạn và 7 người khác
              </Typography>
            </div>
            <Typography className={classes.amountPeopleComment}>
              8 người bình luận
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
                  Nguyễn Văn A
                </Typography>
                <Typography className={classes.commentOtherPeople}>
                  Lorem ipsum dolor sit amet.
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
          <div className={classes.commentsSection}>
            <img src={avatar} className={classes.avatarOtherPeople} />
            <div className={classes.nameVsCommentVsToolsContainer}>
              <div className={classes.nameVsComment}>
                <Typography className={classes.nameOtherPeople}>
                  Nguyễn Văn A
                </Typography>
                <Typography className={classes.commentOtherPeople}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore fugiat quidem quas magnam? Beatae, accusamus est
                  perspiciatis eligendi tenetur libero sint adipisci laudantium
                  qui nobis dolorem quo vero. Delectus quibusdam possimus
                  numquam eum perspiciatis? Earum esse fuga voluptas placeat
                  eos, impedit dolor in soluta, ut vitae libero voluptates. Non,
                  quos.
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
          {/*  */}
          {/*  */}
          {/*  */}
          <div className={classes.yourThinking}>
            <img src={avatar} className={classes.avatarOtherPeople} />
            <input
              className={classes.input}
              placeholder="Viết câu trả lời..."
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur quidem dicta obcaecati vel vitae necessitatibus?
              Maiores natus voluptates quae.
            </Typography>
          </div>
          {/*  */}
          {handleCheckPicture()}
          {/*  */}
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
                Bạn và 7 người khác
              </Typography>
            </div>
            <Typography className={classes.amountPeopleComment}>
              8 người bình luận
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
                  Nguyễn Văn A
                </Typography>
                <Typography className={classes.commentOtherPeople}>
                  Lorem ipsum dolor sit amet.
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
          <div className={classes.commentsSection}>
            <img src={avatar} className={classes.avatarOtherPeople} />
            <div className={classes.nameVsCommentVsToolsContainer}>
              <div className={classes.nameVsComment}>
                <Typography className={classes.nameOtherPeople}>
                  Nguyễn Văn A
                </Typography>
                <Typography className={classes.commentOtherPeople}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore fugiat quidem quas magnam? Beatae, accusamus est
                  perspiciatis eligendi tenetur libero sint adipisci laudantium
                  qui nobis dolorem quo vero. Delectus quibusdam possimus
                  numquam eum perspiciatis? Earum esse fuga voluptas placeat
                  eos, impedit dolor in soluta, ut vitae libero voluptates. Non,
                  quos.
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
          {/*  */}
          {/*  */}
          {/*  */}
          <div className={classes.yourThinking}>
            <img src={avatar} className={classes.avatarOtherPeople} />
            <input
              className={classes.input}
              placeholder="Viết câu trả lời..."
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              consequuntur quidem dicta obcaecati vel vitae necessitatibus?
              Maiores natus voluptates quae.
            </Typography>
          </div>
          {/*  */}
          {handleCheckPictureMax5()}
          {/*  */}
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
                Bạn và 7 người khác
              </Typography>
            </div>
            <Typography className={classes.amountPeopleComment}>
              8 người bình luận
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
                  Nguyễn Văn A
                </Typography>
                <Typography className={classes.commentOtherPeople}>
                  Lorem ipsum dolor sit amet.
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
          <div className={classes.commentsSection}>
            <img src={avatar} className={classes.avatarOtherPeople} />
            <div className={classes.nameVsCommentVsToolsContainer}>
              <div className={classes.nameVsComment}>
                <Typography className={classes.nameOtherPeople}>
                  Nguyễn Văn A
                </Typography>
                <Typography className={classes.commentOtherPeople}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore fugiat quidem quas magnam? Beatae, accusamus est
                  perspiciatis eligendi tenetur libero sint adipisci laudantium
                  qui nobis dolorem quo vero. Delectus quibusdam possimus
                  numquam eum perspiciatis? Earum esse fuga voluptas placeat
                  eos, impedit dolor in soluta, ut vitae libero voluptates. Non,
                  quos.
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
          {/*  */}
          {/*  */}
          {/*  */}
          <div className={classes.yourThinking}>
            <img src={avatar} className={classes.avatarOtherPeople} />
            <input
              className={classes.input}
              placeholder="Viết câu trả lời..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
