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
    cursor: 'pointer',
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

  containerPictures: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 0.5rem',
  },
  item: {
    width: 'calc(100% / 3)',
    position: 'relative',
    border: '2px solid var(--messenger-card-background)',
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
  },
  picture: {
    position: 'absolute',
    borderRadius: '8px',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));
