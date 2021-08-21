import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: '9999999',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    bottom: '0',
    right: '5rem',
    width: '55vw',
    height: '50vh',
    pointerEvents: 'none',
  },
}));
