import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem 0rem',
    [theme.breakpoints.up('lg')]: {
      // margin: '1rem 1rem',
    },
  },
}));
