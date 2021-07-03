import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'var(--background-main)',
  },
  container: {
    padding: '0rem 2rem',
  },
}));
