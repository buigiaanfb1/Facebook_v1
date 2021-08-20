import { makeStyles } from '@material-ui/core';
import { theme } from '../../../common/theme';
import comboTools from '../../../common/images/comboTools.png';
import comboPost6 from '../../../common/images/comboPost6.png';
import comboPost3 from '../../../common/images/comboPost3.png';

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
    // height: '1',
    maxWidth: '700px',
    border: '1px solid var(--border-item)',
    padding: '0',
    color: 'var(--primary-text)',
    [theme.breakpoints.up('sm')]: {
      width: '700px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      height: '30%',
    },
  },
  containerIcon: {
    margin: '1.2rem -0.5rem',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--background-icon)',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0',
    },
  },
  iconEditName: {
    width: '16px',
    height: '16px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(89%) sepia(6%) hue-rotate(185deg)',
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
    padding: '15px 28px 0',
    height: '200px',
  },

  itemText: {
    marginLeft: '12px',
    fontSize: '15px',
    fontWeight: '400',
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
    transition: 'all 0.3s',
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

  textField: {
    width: '100%',
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--border-bottom-nav)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255,255,255, 0.6)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255,255,255, 0.6)',
      },
      '& input': {
        color: 'white',
        fontWeight: '400',
      },
    },
  },
  inputLabelProps: {
    color: 'rgba(255,255,255, 0.6)',
  },
  buttonDisabled: {
    borderRadius: '8px',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 36px',
    margin: '0 8px',
    cursor: 'not-allowed',
    backgroundColor: 'var(--disabled-button-background)',
    transition: 'all 0.3s',
    [theme.breakpoints.down('xs')]: {
      margin: '8px 4px',
    },
  },
  buttonTextDisabled: {
    fontWeight: '500',
    opacity: '0.4',
  },
}));
