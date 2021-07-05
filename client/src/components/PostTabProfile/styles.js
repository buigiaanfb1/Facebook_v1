import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'var(--background-main)',
  },
  container: {
    padding: '0rem 2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 0',
    },
  },
  item: {
    margin: '0 1rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0',
    },
  },
}));
