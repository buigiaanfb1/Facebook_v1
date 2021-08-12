import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';
import fullCombo from '../../common/images/full-combo.png';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  navbar: {
    height: '56px',
    position: 'fixed',
    zIndex: '999',
    top: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--background-nav)',
    borderBottom: '1px solid var(--border-bottom-nav)',
  },
  navContainer: {},

  left: {
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    height: '56px',
    alignItems: 'center',
    padding: '0 0.8rem',
  },

  middle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  right: {
    position: 'fixed',
    top: '0',
    right: '0',
    display: 'flex',
    height: '56px',
    padding: '0px 16px 0px 4px',
  },

  containerIconMiddle: {
    width: '111.6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '48px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-overlay)',
    },
    [theme.breakpoints.down('md')]: {
      width: '70.6px',
    },
  },

  iconNavMiddle: {
    width: '26px',
    height: '26px',
    color: '#fff',
  },

  iconNavRightContainer: {
    display: 'flex',
    height: '56px',
    alignItems: 'center',
  },

  containerIconRight: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--background-icon)',
    borderRadius: '50px',
    margin: '0 0.25rem',
    cursor: 'pointer',
    '&:hover': {
      transition: 'all 0.3s',
      backgroundColor: 'var(--hover-icon-overlay)',
    },
  },

  iconNavRight: {
    width: '18px',
    height: '18px',
  },

  iconMuiNavRight: {
    width: '30px',
    height: '30px',
  },

  iconInCombo: {
    backgroundImage: `url(${fullCombo})`,
    backgroundPosition: '0 -725px',
    backgroundSize: '33px 933px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    WebkitFilter: 'var(--primary-text)',
  },

  userContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    marginRight: '0.25rem',
  },

  userContainer2: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    height: '36px',
    borderRadius: '45px',
    padding: '0 0.2rem',
    cursor: 'pointer',
    '&:hover': {
      transition: 'all 0.3s',
      backgroundColor: 'var(--background-icon)',
    },
  },

  avatar: {
    width: '28px',
    height: '28px',
  },
  nameUser: {
    fontWeight: '700',
    fontSize: '15px',
    margin: '0rem 0.5rem 0rem 0.25rem',
  },

  button: {
    // width: '100%',
    height: '36px',
    padding: '0 12px',
    margin: '10px 0',
    backgroundColor: 'var(--background-button)',
    border: 'none',
    borderRadius: '8px',
    transition: 'all 0.2s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--background-button-hover)',
    },
  },
  titleButton: {
    fontSize: '15px',
    fontWeight: '500',
  },
  activeProfileTag: {
    textDecoration: 'none',
    '& $userContainer2': {
      backgroundColor: 'var(--primary-deemphasized-button-background)',
      '&:hover': {
        transition: 'all 0.3s',
        opacity: 0.9,
      },
      '& $nameUser': {
        color: 'var(--primary-deemphasized-button-text)',
      },
    },
  },
}));
