import { makeStyles } from '@material-ui/core';
import { theme } from '../../../common/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '56px',
    display: 'flex',
  },
  containerNavigation: {
    width: '360px',
    backgroundColor: 'var(--background-nav)',
    minHeight: '100vh',
    padding: '0.5rem',
    borderRight: '1px solid var(--border-item)',
    position: 'fixed',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  containerMain: {
    marginLeft: '360px',
    width: 'calc(100vw - 360px)',
    backgroundColor: 'var(--background-main)',
    minHeight: '100vh',
    padding: '36px 20px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
      width: 'calc(100vw)',
    },
  },

  containerTitle: {
    padding: '0.25rem 0.45rem 0.5rem 0.45rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: '24px',
    fontWeight: '700',
  },
  containerTitleMain: {
    padding: '0 16px',
  },
  titleMain: {
    fontSize: '20px',
    fontWeight: '700',
  },
  containerIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'var(--secondary-button-background)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      transition: 'all 0.3s',
      backgroundColor: 'var(--hover-icon-overlay)',
    },
  },
  iconSettings: {
    backgroundImage:
      'url(https://www.facebook.com/rsrc.php/v3/yU/r/zQiM6r19swG.png)',
    backgroundPosition: '-21px -445px',
    backgroundSize: '49px 580px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(100%)',
  },

  iconFriends: {
    backgroundImage:
      'url(https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/fIHggQxUDyj.png)',
    backgroundPosition: '-147px -107px',
    backgroundSize: '189px 192px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(100%)',
  },

  iconIncoming: {
    backgroundImage:
      'url(https://www.facebook.com/rsrc.php/v3/yK/r/92X_XzM4SRr.png)',
    backgroundPosition: '0px -92px',
    backgroundSize: '25px 240px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(100%)',
  },

  iconSuggest: {
    backgroundImage:
      'url(https://www.facebook.com/rsrc.php/v3/yK/r/92X_XzM4SRr.png)',
    backgroundPosition: '0px -50px',
    backgroundSize: '25px 240px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(100%)',
  },
  iconAll: {
    backgroundImage:
      'url(https://www.facebook.com/rsrc.php/v3/yK/r/92X_XzM4SRr.png)',
    backgroundPosition: '0px -71px',
    backgroundSize: '25px 240px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(100%)',
  },
  iconBirthday: {
    backgroundImage:
      'url(https://www.facebook.com/rsrc.php/v3/yK/r/92X_XzM4SRr.png)',
    backgroundPosition: '0px -113px',
    backgroundSize: '25px 240px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(100%)',
  },
  iconFilter: {
    backgroundImage:
      'url(https://www.facebook.com/rsrc.php/v3/yK/r/92X_XzM4SRr.png)',
    backgroundPosition: '0px -50px',
    backgroundSize: '25px 240px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(100%)',
  },
  containerItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      transition: 'all 0.3s',
      backgroundColor: 'var(--hover-overlay)',
    },
  },
  content: {
    marginLeft: '0.75rem',
    fontSize: '17px',
    fontWeight: '500',
  },
  activeClassLink: {
    '& > div': {
      backgroundColor: 'rgba(45, 136, 255, 0.1)',
      '& > div': {
        backgroundColor: 'var(--base-blue)',
      },
    },
  },
  containerItems: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '12px 12px',
  },
}));
