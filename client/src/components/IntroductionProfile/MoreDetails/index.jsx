import React from 'react';
import iconWorkWhere from '../../../common/images/iconWorkWhere.png';
import iconLocationWhere from '../../../common/images/iconLocationWhere.png';
import iconHomeWhere from '../../../common/images/iconHomeWhere.png';
import iconStudyWhere from '../../../common/images/iconStudyWhere.png';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import ModalDetails from './ModalDetails';

const MoreDetails = () => {
  const classes = useStyles();

  return (
    <>
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

      <ModalDetails />
    </>
  );
};

export default MoreDetails;
