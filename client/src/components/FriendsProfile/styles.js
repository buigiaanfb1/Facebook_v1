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
  friendsContainer: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  item: {
    width: 'calc(95% / 3)',
    display: 'flex',
    flexDirection: 'column',
    // paddingRight: '0.75rem',
    paddingBottom: '0.75rem',
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
}));
