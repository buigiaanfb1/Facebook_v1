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
    margin: '0 -6px',
    // justifyContent: 'space-around',
  },
  containerImage: {
    width: 'calc(100% / 6)',
    marginBottom: '0.7rem',
    padding: '0 6px',
    [theme.breakpoints.down('lg')]: {
      width: 'calc(100% / 5)',
    },
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    objectFit: 'cover',
  },
}));
