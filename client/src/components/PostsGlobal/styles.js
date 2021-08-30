import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  proundText: {
    fontWeight: '500',
    lineHeight: '18px',
    margin: '1rem',
  },
  proundIcon: {
    fill: '#F25022',
    verticalAlign: 'bottom',
  },
}));
