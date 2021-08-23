import { makeStyles } from '@material-ui/core';
import { theme } from '../../../../../common/theme';

export const useStyles = makeStyles((theme) => ({
  containerToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.7rem 1rem',
    margin: '0 8px',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'var(--hover-overlay)',
    },
  },
  toggleText: {
    fontSize: '15px',
    fontWeight: '500',
  },
  toggledIcon: {
    backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/rmgFaejTAFy.png)`,
    backgroundPosition: '0px -67px',
    backgroundSize: '189px 152px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    verticalAlign: '-0.25em',
    filter:
      'invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%)',
  },
  toggleIcon: {
    backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/rmgFaejTAFy.png)`,
    backgroundPosition: '-84px -46px',
    backgroundSize: '189px 152px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    verticalAlign: '-0.25em',
    filter:
      'invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%)',
  },
}));
