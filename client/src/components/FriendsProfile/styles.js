import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'var(--background-post)',
    borderRadius: '8px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
  },
  linkAll: {
    marginLeft: 'auto',
    color: 'var(--color-blue)',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  amountFriends: {
    color: 'var(--secondary-text)',
  },
  friendsAvatar: {
    width: '100%',
    borderRadius: '8px',
    minHeight: '145.84px',
    objectFit: 'cover',
    [theme.breakpoints.down('lg')]: {
      minHeight: '90px',
    },
  },
  friendName: {
    marginTop: '4px',
    fontSize: '13px',
    fontWeight: '500',
  },

  friendsContainer: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },

  item: {
    width: 'calc(100% / 3)',
    padding: '0px 4px 16px 4px',
  },

  rectImgContainer: {
    position: 'relative',
    width: 'calc(100%)',
    border: '2px solid var(--background-post)',
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
  },
  rectImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
}));
