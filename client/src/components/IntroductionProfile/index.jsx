import React from 'react';
import { useStyles } from './styles';
import iconWorkWhere from '../../common/images/iconWorkWhere.png';
import iconLocationWhere from '../../common/images/iconLocationWhere.png';
import iconHomeWhere from '../../common/images/iconHomeWhere.png';
import iconStudyWhere from '../../common/images/iconStudyWhere.png';
import { Typography } from '@material-ui/core';

const IntroductionProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Giới thiệu</Typography>
      <button className={classes.button}>
        <Typography className={classes.titleButton}>Thêm tiểu sử</Typography>
      </button>
      {/*  */}
      <div className={classes.item}>
        <img src={iconWorkWhere} className={classes.iconWhere} />
        <Typography className={classes.textWhere}>
          Làm việc tại{' '}
          <span className={classes.textWhereMain}>FPT Sofware</span>
        </Typography>
      </div>
      <div className={classes.item}>
        <img src={iconStudyWhere} className={classes.iconWhere} />
        <Typography className={classes.textWhere}>
          Đã học tại{' '}
          <span className={classes.textWhereMain}>FPT University</span>
        </Typography>
      </div>
      <div className={classes.item}>
        <img src={iconHomeWhere} className={classes.iconWhere} />
        <Typography className={classes.textWhere}>
          Sống tại{' '}
          <span className={classes.textWhereMain}>Thành phố Hồ Chí Minh</span>
        </Typography>
      </div>
      <div className={classes.item}>
        <img src={iconLocationWhere} className={classes.iconWhere} />
        <Typography className={classes.textWhere}>
          Đến từ{' '}
          <span className={classes.textWhereMain}>
            Thành phố Tân An, Long An
          </span>
        </Typography>
      </div>
      {/*  */}
      <button className={classes.button}>
        <Typography className={classes.titleButton}>
          Chỉnh sửa chi tiết
        </Typography>
      </button>
      <button className={classes.button}>
        <Typography className={classes.titleButton}>Thêm sở thích</Typography>
      </button>
      <button className={classes.button}>
        <Typography className={classes.titleButton}>
          Thêm nội dung đáng chú ý
        </Typography>
      </button>
    </div>
  );
};

export default IntroductionProfile;
