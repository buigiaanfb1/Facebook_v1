import { makeStyles } from '@material-ui/core';
import comboPost3 from '../../../../../../common/images/comboPost3.png';
import comboPost2 from '../../../../../../common/images/comboPost2.png';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    backgroundColor: 'var(--background-black)',
    width: '100%',
    height: '100%',
  },

  itemLeftFullWidth: {
    position: 'relative',
    width: '100%',
    backgroundColor: 'var(--background-black)',
    transition: 'all 0.5s',
    '&:hover $containerArrowLeft': {
      backgroundColor: 'var(--shadow-1)',
    },
    '&:hover $containerArrowRight': {
      backgroundColor: 'var(--shadow-1)',
    },
    '&:hover $iconContainer': {
      display: 'flex',
    },
  },
  itemNoneRight: {
    width: '0%',
    display: 'none',
    transition: 'none',
  },

  itemLeft: {
    position: 'relative',
    width: '80%',
    backgroundColor: 'var(--background-black)',
    transition: 'backgroundColor 0.3s',
    '&:hover $containerArrowLeft': {
      backgroundColor: 'var(--shadow-1)',
    },
    '&:hover $containerArrowRight': {
      backgroundColor: 'var(--shadow-1)',
    },
    '&:hover $iconContainer': {
      display: 'flex',
    },
    [theme.breakpoints.down('lg')]: {
      width: '70%',
    },
  },
  itemRight: {
    width: '20%',
    transition: 'none',
    [theme.breakpoints.down('lg')]: {
      width: '30%',
    },
  },
  // Navigation
  containerNavigation: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    width: '100%',
    zIndex: '999',
    height: '56px',
    display: 'flex',
  },

  navLeft: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  navRightIconContainer: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1rem',
  },

  logo: {
    width: '50px',

    marginLeft: '0.22rem',
  },

  navLeftIconContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1rem',
    transition: 'all 0.1s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-icon-overlay)',
    },
  },

  navRightIconContainer: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1rem',
    transition: 'all 0.1s',
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
  iconFullView: {
    backgroundImage: `url(${comboPost3})`,
    backgroundPosition: '0px -918px',
    backgroundSize: '33px 1231px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    transition: 'all 0.3s',
    filter: 'invert(100%)',
  },

  // Main
  container: {
    display: 'flex',
  },
  containerArrowLeft: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '0',
    left: '0',
    height: '100%',
    width: '75px',
    transition: 'all 0.3s',
    zIndex: '3',
    '&:hover': {
      backgroundColor: 'var(--shadow-2) !important',
      width: '65px',
    },
    '&:hover $iconLeft': {
      filter: 'invert(100%)',
    },
  },
  containerArrowRight: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '0',
    right: '0',
    height: '100%',
    width: '75px',
    transition: 'all 0.3s',
    zIndex: '3',
    '&:hover': {
      backgroundColor: 'var(--shadow-2) !important',
      width: '65px',
    },
    '&:hover $iconRight': {
      filter: 'invert(100%)',
    },
    '&:hover $iconContainer': {
      backgroundColor: 'var(--background-icon-arrow-hover) !important',
    },
  },
  containerArrow: {
    backgroundColor: 'var(--shadow-1)',
  },
  iconContainer: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'var(--background-icon-arrow) !important',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  iconLeft: {
    backgroundImage: `url(${comboPost2})`,
    backgroundPosition: '-25px -155px',
    backgroundSize: '73px 407px',
    width: '24px',
    height: '24px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    transition: 'all 0.3s',
    filter: 'invert(60%)',
  },
  iconRight: {
    backgroundImage: `url(${comboPost2})`,
    backgroundPosition: '-25px -180px',
    backgroundSize: '73px 407px',
    width: '24px',
    height: '24px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    transition: 'all 0.3s',
    filter: 'invert(60%)',
  },
}));
