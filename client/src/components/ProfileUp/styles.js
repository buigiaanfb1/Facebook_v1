import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';
import comboTools from '../../common/images/comboTools.png';
import comboPost6 from '../../common/images/comboPost6.png';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'var(--background-up-profile)',
  },
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  wallpaperContainer: {
    position: 'relative',
    maxHeight: '475px',
    cursor: 'pointer',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '350px',
    },
  },
  wallpaper: {
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    width: '100%',
    maxHeight: '475px',
    height: '475px',
    objectFit: 'cover',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '350px',
      height: '350px',
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '200px',
      height: '200px',
    },
  },

  buttonEditWallpaper: {
    position: 'absolute',
    bottom: '5%',
    right: '2.5%',
    zIndex: '50',
    padding: '6px 12px',
    background: 'var(--primary-text-button)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.96',
    },
    [theme.breakpoints.down('xs')]: {
      bottom: '80%',
      right: '5%',
    },
  },

  iconEditWallpaper: {
    backgroundImage: `url(${comboTools})`,
    backgroundPosition: '0 -46px',
    backgroundSize: '25px 191px',
    width: '16px',
    height: '16px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(0%)',
  },
  editWallpaperText: {
    fontWeight: '500',
    fontSize: '15px',
    color: 'var(--background-black)',
    marginLeft: '0.25rem',
  },
  wallpaperDefault: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    width: '100%',
    height: '475px',
    objectFit: 'cover',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '350px',
    },
  },
  avatarVsButtonContainer: {
    display: 'flex',
    padding: '0 2rem',
    transform: 'translate(0%, -50%)',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '-10%',
      left: 'calc(0% + 2rem)',
      width: 'calc(100% - 4rem)',
      height: '1px',
      background: 'var(--border-bottom-nav)',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      transform: 'translate(0%, -30%)',
    },
  },

  left: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
    },
  },

  avatarContainer: {
    position: 'relative',
  },

  containerEditAvatar: {
    position: 'absolute',
    bottom: '5%',
    right: '8%',
    zIndex: '50',
    width: '36px',
    height: '36px',
    background: '#3A3B3C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
      background: '#494a4b',
    },
  },
  iconEditAvatar: {
    backgroundImage: `url(${comboPost6})`,
    backgroundPosition: '0 -200px',
    backgroundSize: '33px 895px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(89%) sepia(6%) hue-rotate(185deg)',
  },

  avatarBig: {
    width: '168px',
    height: '168px',
    borderRadius: '50%',
    border: '5px solid var(--background-up-profile)',
    objectFit: 'cover',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: '120px',
      height: '120px',
    },
  },

  nameBig: {
    fontSize: '32px',
    fontWeight: '700',
    padding: '0.25rem 1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
      padding: '0.1rem 1rem',
    },
  },

  // buttons
  right: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  containerButtons: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: '1rem 0',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0',
    },
  },

  addContainer: {
    borderRadius: '6px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    margin: '0 8px',
    cursor: 'pointer',
    backgroundColor: 'var(--button-blue)',
    [theme.breakpoints.down('xs')]: {
      margin: '8px 4px',
    },
  },
  editContainer: {
    borderRadius: '6px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    marginLeft: '8px',
    cursor: 'pointer',
    backgroundColor: 'var(--background-searchBar)',
  },
  addFriendContainer: {
    borderRadius: '6px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    marginLeft: '8px',
    cursor: 'pointer',
    backgroundColor: 'var(--background-searchBar)',
  },
  messageContainer: {
    borderRadius: '6px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    marginLeft: '8px',
    cursor: 'pointer',
    backgroundColor: 'var(--button-blue)',
  },
  iconRight: {
    width: '16px',
    height: '16px',
    filter: 'invert(100%)',
  },
  iconRightText: {
    fontWeight: '500',
    marginLeft: '8px',
    color: 'var(--primary-text-button)',
  },
  //navigation
  navigationContainer: {
    padding: '0rem 2rem',
    marginTop: '-4rem',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-3rem',
      justifyContent: 'center',
    },
  },
  item: {
    padding: '1rem',
    transition: 'all 0.2s',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-overlay)',
    },
  },
  itemSelected: {
    position: 'relative',
    padding: '1rem',
    transition: 'all 0.2s',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '3px',
      display: 'block',
      background: 'var(--button-blue)',
    },
  },
  itemText: {
    color: 'var(--secondary-text)',
    fontWeight: '500',
  },
  itemTextSelected: {
    color: 'var(--color-text-tab)',
    fontWeight: '500',
  },
}));
