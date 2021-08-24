import { makeStyles } from '@material-ui/core';
import { theme } from '../../../../common/theme';

export const useStyles = makeStyles((theme) => ({
  introduce: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '1.5rem',
    '& img': {
      width: '80px',
      height: '80px',
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
  container: {
    height: 'calc(100vh - 65px)',
    overflow: 'hidden',
    '&:hover': {
      overflowY: 'auto',
      overflowY: 'overlay',
    },
  },
}));
