import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '500',
    fontSize: '17px',
    color: 'var(--secondary-text)',
  },
  container: {
    // margin: '0 16px',
  },
  titleFriendOnlineContainer: {
    padding: '1rem 0',
  },
  friendOnlineContainer: {
    paddingBottom: '1rem',
  },
  containerAvatar: {
    position: 'relative',
    width: '28px',
    height: '28px',
    marginRight: '0.5rem',
  },
  dotGreenOnline: {
    position: 'absolute',
    bottom: '0',
    right: '-2px',
    width: '10px',
    height: '10px',
    backgroundColor: '#31A24C',
    borderRadius: '50%',
    border: '2px solid var(--background-up-profile)',
  },
  friendContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0 0.5rem 8px',
    marginLeft: '-8px',
    borderRadius: '8px',
    transition: 'all 0.1s',
    '&:hover': {
      backgroundColor: 'var(--hover-overlay)',
    },
  },
  avatarFriend: {
    width: '28px',
    height: '28px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  nameFriend: {
    fontSize: '15px',
    fontWeight: '500',
  },
}));
