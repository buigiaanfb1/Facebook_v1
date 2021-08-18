import React from 'react';
import iconWorkWhere from '../../../common/images/iconWorkWhere.png';
import iconLocationWhere from '../../../common/images/iconLocationWhere.png';
import iconJoin from '../../../common/images/iconJoin.png';
import iconHomeWhere from '../../../common/images/iconHomeWhere.png';
import iconStudyWhere from '../../../common/images/iconStudyWhere.png';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import ModalDetails from './ModalDetails';
import { formatThangMMNamYYYYY } from '../../../helpers/formatThangMMNamYYYY';
import { useSelector } from 'react-redux';

const MoreDetails = () => {
  const classes = useStyles();
  const profileInfo = useSelector((state) => state.shareStore.profileInfo);
  const currentUser = useSelector((state) => state.userStore.currentUser);

  const handleAddIconAndTextInfo = (icon, label, content) => {
    return (
      <div className={classes.item}>
        <img src={icon} className={classes.iconWhere} />
        <Typography className={classes.textWhere}>
          {label} <span className={classes.textWhereMain}>{content}</span>
        </Typography>
      </div>
    );
  };

  const handleRenderInfo = () => {
    let container = [];
    if (profileInfo && profileInfo.info) {
      for (const [key, value] of Object.entries(profileInfo.info)) {
        if (key === 'createdAt' && value.display) {
          const result = formatThangMMNamYYYYY(value.time);
          container.push(
            handleAddIconAndTextInfo(iconJoin, value.label, result)
          );
        }
      }
      return container.map((item, index) => {
        return <div key={index}>{item}</div>;
      });
    }
  };

  return (
    <>
      {handleRenderInfo()}
      <ModalDetails profileInfo={profileInfo} currentUser={currentUser} />
    </>
  );
};

export default MoreDetails;
