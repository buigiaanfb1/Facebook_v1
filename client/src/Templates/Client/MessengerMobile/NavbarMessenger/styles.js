import { makeStyles } from '@material-ui/core';
import { theme } from '../../../../common/theme';
import comboIcon1 from '../../../../common/images/comboIcon1.png';

export const useStyles = makeStyles((theme) => ({
  iconMuiNavRight: {
    width: '18px',
    height: '18px',
  },
  containerIconRight: {
    position: 'relative',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50px',
    margin: '0 0.25rem',
    cursor: 'pointer',
  },
  containerAll: {
    width: '100%',
    height: '100%',
  },
  container: {
    overflow: 'auto',
  },
  containerHeader: {
    padding: '1rem',
  },
  title: {
    fontWeight: '700',
    lineHeight: '26px',
    fontSize: '24px',
  },
  containerMess: {
    height: '100vh',
    overflow: 'auto',
    overflowY: 'overlay',
  },
  messItemSelected: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '1rem 0.5rem',
    margin: '0 8px',
    height: '72px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'var(--hosted-view-selected-state)',
    '&:hover': {
      backgroundColor: 'var(--hosted-view-selected-state)',
    },
  },
  messItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '1rem 0.5rem',
    margin: '0 8px',
    height: '72px',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-overlay)',
    },
  },
  avatarContainer: {
    width: '68px',
    height: '56px',
  },
  avatar: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  nameVsLastMess: {
    // marginLeft: '0.5rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  username: {
    fontWeight: '500',
    lineHeight: '19px',
    fontSize: '16px',
  },
  lastMess: {
    marginTop: '0.15rem',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '17px',
    color: 'var(--secondary-text)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  footer: {
    borderTop: '1px solid var(--border-item)',
    padding: '17px 0px 16px',
    textAlign: 'center',
  },
  link: {
    color: 'var(--blue-link)',
    fontWeight: '500',
    lineHeight: '100%',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  searchBar: {
    marginLeft: '-8px',
    padding: '1rem 0 0.5rem 0',
  },

  alertContainer: {
    position: 'absolute',
    top: '-10%',
    right: '-20%',
    height: '19px',
    width: '19px',
    backgroundColor: 'var(--notification-badge)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  alert: {
    fontSize: '13px',
    color: 'var(--always-white)',
    fontWeight: '500',
  },
  unSeen: {
    color: 'var(--accent)',
    marginTop: '0.15rem',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '17px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
