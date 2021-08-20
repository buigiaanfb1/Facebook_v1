import { makeStyles } from '@material-ui/core';
import { theme } from '../../../common/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '328px',
    height: '455px',
    background: 'pink',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    margin: '0 0.25rem',
    backgroundColor: 'var(--messenger-card-background)',
    boxShadow: theme.shadows[5],
  },
  header: {
    padding: '8px',
    borderBottom: '1px solid var(--border-item)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerAvatarVsName: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  containerAvatar: {
    width: '40px',
    height: '32px',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
  },
  nameBig: {
    fontWeight: '500',
  },
  containerTools: {
    display: 'flex',
    // padding: '0 8px',
  },
  icon: {
    width: '31px',
    height: '31px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-1)',
    },
  },
  body: {
    height: 'calc(455px - 53px - 49px)',
    overflow: 'auto',
  },
  introduce: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '1.5rem',
    '& img': {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
    },
  },
  nameIntroduce: {
    fontSize: '17px',
    fontWeight: '500',
    padding: '0.35rem 0 0rem',
  },
  infoIntroduce: {
    color: 'var(--secondary-text)',
    fontSize: '14px',
    lineHeight: '170%',
    fontWeight: 'normal',
  },
  iconInput: {
    width: '40px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-1)',
    },
  },
  inputContainer: {
    // backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
    height: '53px',
    padding: '0 8px',
  },
}));
