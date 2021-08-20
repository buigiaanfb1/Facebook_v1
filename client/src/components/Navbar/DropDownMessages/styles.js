import { makeStyles } from '@material-ui/core';
import { theme } from '../../../common/theme';
import comboIcon1 from '../../../common/images/comboIcon1.png';

export const useStyles = makeStyles((theme) => ({
  iconMuiNavRight: {
    width: '18px',
    height: '18px',
  },
  containerIconRight: {
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
    position: 'relative',
    width: '343px',
    height: '100%',
    backgroundColor: 'var(--background-post)',
    boxShadow: theme.shadows[5],
    borderRadius: '8px',
    border: '1px solid var(--border-item)',
  },
  container: {
    maxHeight: '85vh',
    overflow: 'auto',
    padding: '1rem',
  },
  title: {
    fontWeight: '700',
    lineHeight: '26px',
    fontSize: '24px',
  },
  containerMess: {},
  messItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
    margin: '0 -8px',
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
    // marginLeft,
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
}));
