import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'var(--background-up-profile)',
  },
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  wallpaperContainer: {
    maxHeight: '475px',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '350px',
    },
  },
  wallpaper: {
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    width: '100%',
    maxHeight: '475px',
    objectFit: 'cover',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '350px',
    },
  },
  avatarVsButtonContainer: {
    display: 'flex',
    padding: '0 2rem',
    transform: 'translate(0%, -50%)',
    // borderBottom: '1px solid var(--border-bottom-nav)',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '-10%',
      left: 'calc(0% + 2rem)',
      width: 'calc(100% - 4rem)',
      height: '1px',
      background: 'var(--border-bottom-nav)',
    },
  },

  left: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '60%',
  },

  avatarBig: {
    width: '168px',
    height: '168px',
    borderRadius: '50%',
    border: '5px solid var(--background-up-profile)',
  },
  nameBig: {
    fontSize: '32px',
    fontWeight: '700',
    padding: '0.25rem 1rem',
  },

  // buttons
  right: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  containerButtons: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: '1rem 0',
  },

  addContainer: {
    borderRadius: '8px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    margin: '0 4px',
    backgroundColor: 'var(--button-blue)',
  },
  editContainer: {
    borderRadius: '8px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    marginLeft: '4px',
    backgroundColor: 'var(--background-searchBar)',
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
  },
  item: {
    padding: '1rem',
    transition: 'all 0.2s',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'var(--hover-overlay)',
    },
  },
  itemText: {
    color: 'var(--secondary-text)',
    fontWeight: '500',
  },
}));
