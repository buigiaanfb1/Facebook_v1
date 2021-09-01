import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  friendInviteContainer: {
    padding: '1rem 0',
    borderBottom: '1px solid var(--border-bottom-nav)',
    borderTop: '1px solid var(--border-bottom-nav)',
  },
  friendInviteTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 0 0.5rem 0',
  },
  title: {
    fontWeight: '500',
    fontSize: '17px',
    color: 'var(--secondary-text)',
  },
  linkAll: {
    color: 'var(--color-blue)',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '8px',
    margin: '0 -8px',
    borderRadius: '8px',
    transition: 'all 0.1s',
    '&:hover': {
      backgroundColor: 'var(--hover-overlay)',
    },
  },
  pictureAvatarInvite: {
    width: '46.67px',
    height: '46.67px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '0.75rem',
  },
  containerRight: {
    width: '100%',
  },
  nameVsDate: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '500',
  },
  date: {
    fontSize: '14px',
    color: 'var(--secondary-text)',
  },
  buttons: {
    display: 'flex',
    marginTop: '8px',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  },
  buttonAccept: {
    backgroundColor: 'var(--button-blue)',
    border: 'none',
    width: 'calc(100% / 2)',
    height: '36px',
    color: 'var(--always-white)',
    borderRadius: '8px',
    marginRight: '8px',
    fontWeight: '700',
    fontSize: '15px',
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
    width: 'calc(100% / 2)',
    height: '36px',
    borderRadius: '8px',
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
