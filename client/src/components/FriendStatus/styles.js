import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  containerFriendStatus: {
    position: 'fixed',
    top: '100px',
    right: '0',
    width: '360px',
    maxHeight: 'calc(100vh - 100px)',
    overflow: 'auto',
    [theme.breakpoints.down('lg')]: {
      width: '280px',
    },
    [theme.breakpoints.down('md')]: {
      width: '240px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  title: {
    fontWeight: '500',
    fontSize: '17px',
    color: 'var(--secondary-text)',
  },
  container: {
    margin: '0 16px',
  },
  titleFriendOnlineContainer: {
    padding: '1rem 0',
  },
  friendOnlineContainer: {
    paddingBottom: '1rem',
  },
  friendContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0 0.5rem 8px',
    marginLeft: '-8px',
    borderRadius: '8px',
    transition: 'all 0.1s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-overlay)',
    },
  },
  avatarFriend: {
    width: '28px',
    height: '28px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  nameFriend: {
    fontSize: '15px',
    fontWeight: '500',
  },
}));
