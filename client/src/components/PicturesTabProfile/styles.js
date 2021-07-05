import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'var(--background-main)',
  },
  container: {
    display: 'block !important',
    padding: '1rem',
    margin: '1rem 2rem',
    borderRadius: '8px',
    backgroundColor: 'var(--background-post)',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      margin: '1rem 0',
    },
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    display: 'block',
    paddingBottom: '1rem',
  },
  containerAll: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  containerImage: {
    position: 'relative',
    width: 'calc(100% / 6)',
    border: '5px solid transparent',
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
    [theme.breakpoints.down('lg')]: {
      width: 'calc(100% / 5)',
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% / 4)',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% / 3)',
    },
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
}));
