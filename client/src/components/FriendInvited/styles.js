import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: 'calc(100% / 7)',
  },
  containerItemPeople: {
    borderRadius: '8px',
    margin: '4px',
    backgroundColor: 'var(--background-nav)',
    border: '1px solid var(--border-item)',
  },
  avatarOtherPeople: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  containerInfo: {
    padding: '12px',
  },
  name: {
    fontSize: '17px',
    fontWeight: '500',
  },
  containerButton: {
    paddingTop: '1rem',
  },
  buttonAccept: {
    backgroundColor: 'var(--button-blue)',
    border: 'none',
    width: '100%',
    height: '36px',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '15px',
    color: '#FFF',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: 'var(--button-blue-hover)',
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      margin: '4px 0',
    },
  },
  buttonDecline: {
    backgroundColor: 'var(--hover-overlay)',
    border: 'none',
    width: '100%',
    height: '36px',
    borderRadius: '8px',
    marginTop: '6px',
    fontWeight: '700',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: 'var(--hover-icon-overlay)',
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      margin: '4px 0',
    },
  },

  buttonDisable: {
    backgroundColor: 'var(--hover-icon-overlay)',
    border: 'none',
    width: '100%',
    height: '36px',
    borderRadius: '8px',
    marginTop: '6px',
    fontWeight: '700',
    fontSize: '15px',
    cursor: 'not-allowed',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      margin: '4px 0',
    },
  },
}));
