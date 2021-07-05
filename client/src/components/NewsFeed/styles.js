import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem 0rem',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 0',
    },
  },
}));
