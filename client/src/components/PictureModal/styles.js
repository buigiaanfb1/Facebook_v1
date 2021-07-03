import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'var(--background-black)',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  picture: {
    maxWidth: '100%',
    maxHeight: '100vh',
    objectFit: 'contain',
  },
}));
