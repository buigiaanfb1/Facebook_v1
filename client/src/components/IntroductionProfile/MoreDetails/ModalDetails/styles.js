import { makeStyles } from '@material-ui/core';
import { theme } from '../../../../common/theme';
import comboPost3 from '../../../../common/images/comboPost3.png';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    backgroundColor: 'var(--card-background)',
    boxShadow: theme.shadows[5],
    borderRadius: '8px',
    overflowY: 'hidden',
    height: '90vh',
    maxWidth: '700px',
    border: '1px solid var(--border-item)',
    padding: '0',
    color: 'var(--primary-text)',
    [theme.breakpoints.up('sm')]: {
      width: '700px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '85%',
    },
  },
  button: {
    width: '100%',
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

  titleContainer: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid var(--border-item)',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
  },
  detailsContainer: {
    padding: '15px 28px 28px 28px',
    marginBottom: '76px',
    height: '500px',
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(90vh - 136px)',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(85vh - 136px)',
    },
  },
  detailItem: {
    marginTop: '1.5rem',
  },
  titleDetailItem: {
    fontWeight: '500',
    fontSize: '17px',
  },
  itemSwitch: {
    padding: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: '12px',
    fontSize: '15px',
    fontWeight: '300',
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '76px',
    borderTop: '1px solid var(--border-item)',
  },
  buttonContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '0.5rem',
  },
  saveContainer: {
    borderRadius: '8px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 36px',
    margin: '0 8px',
    cursor: 'pointer',
    backgroundColor: 'var(--button-blue)',
    [theme.breakpoints.down('xs')]: {
      margin: '8px 4px',
    },
  },
  unSaveContainer: {
    borderRadius: '8px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    marginLeft: '8px',
    cursor: 'pointer',
    backgroundColor: 'var(--background-searchBar)',
  },
  iconRightText: {
    fontWeight: '500',
    color: 'var(--primary-text-button)',
  },
  iconExitContainer: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.7rem 1rem',
    transition: 'all 0.1s',
    position: 'absolute',
    top: '0',
    right: '0',
    cursor: 'pointer',
    backgroundColor: 'var(--secondary-button-background)',
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
    filter: 'invert(70%)',
    // verticalAlign: '-0.25em',
  },
}));
