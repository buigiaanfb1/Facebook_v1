import { makeStyles } from '@material-ui/core';
import comboPost3 from '../../common/images/comboPost3.png';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'var(--background-black)',
    boxShadow: theme.shadows[5],
    width: '100vw',
    height: '100vh',
  },
  wallpaperContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wallpaper: {
    maxWidth: '100%',
    maxHeight: '100vh',
    objectFit: 'contain',
  },
  iconExitContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem',
    transition: 'all 0.1s',
    position: 'absolute',
    top: '0',
    left: '0',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-icon-overlay)',
    },
  },
  iconExit: {
    backgroundImage: `url(${comboPost3})`,
    backgroundPosition: '0px -624px',
    backgroundSize: '33px 1231px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    transition: 'all 0.3s',
    filter: 'invert(100%)',
    // verticalAlign: '-0.25em',
  },
}));
