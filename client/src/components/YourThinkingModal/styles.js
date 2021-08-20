import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';
import comboPost4 from '../../common/images/comboPost4.png';
import comboPost5 from '../../common/images/comboPost5.png';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: 'var(--background-post)',
    width: '500px',
    maxHeight: '100%',
    boxShadow: theme.shadows[5],
    borderRadius: '8px',
    border: '1px solid var(--border-item)',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '0px',
      height: '100vh',
    },
  },

  paper: {
    padding: '1rem',
    overflowY: 'auto',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    textAlign: 'center',
    padding: '1rem 0',
    borderBottom: '1px solid var(--background-icon-arrow)',
  },
  avatarVsName: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
  },
  avatar: {
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  nameVsPrivacy: {
    marginLeft: '0.75rem',
  },
  name: {
    fontSize: '15px',
    fontWeight: '500',
  },
  containerPrivacy: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '24px',
    padding: '0 8px',
    borderRadius: '8px',
    backgroundColor: 'var(--background-button)',
  },
  earth: {
    width: '12px',
    height: '12px',
    filter: 'invert(100%)',
  },
  privacyText: {
    fontSize: '13px',
    margin: '0 4px',
    fontWeight: '500',
  },
  arrowDown: {
    backgroundImage: `url(${comboPost4})`,
    backgroundPosition: '-17px -1179px',
    backgroundSize: '33px 1210px',
    width: '12px',
    height: '12px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(100%)',
  },

  exitContainer: {
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '0.9rem 1rem',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--background-button)',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  exit: {
    backgroundImage: `url(${comboPost4})`,
    backgroundPosition: '0px -624px',
    backgroundSize: '33px 1210px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(60%)',
  },
  textAreaContainer: {
    width: '100%',
  },
  textArea: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: 'transparent',
    border: 'none',
    width: '100%',
    minHeight: '105px',
    fontSize: '24px',
    outline: 'none',
    resize: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  toolsContainer: {
    borderRadius: '8px',
    padding: '0.65rem 1rem',
    border: '1px solid var(--border-bottom-nav)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textAdd: {
    fontSize: '15px',
    fontWeight: '500',
  },
  containerIconPicture: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '36px',
    width: '36px',
    borderRadius: '50%',
    transition: 'all 0.2s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--background-button)',
    },
  },
  pictureIcon: {
    backgroundImage: `url(${comboPost5})`,
    backgroundPosition: '0px -357px',
    backgroundSize: '49px 559px',
    width: '24px',
    height: '24px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },
  buttonPostContainer: {
    paddingTop: '1rem',
  },
  buttonPostDisabled: {
    width: '100%',
    backgroundColor: 'var(--disabled-button-background)',
    border: 'none',
    borderRadius: '8px',
    height: '36px',
    cursor: 'not-allowed',
  },
  buttonPostTextDisabled: {
    fontSize: '15px',
    fontWeight: '500',
    opacity: '0.4',
  },
  buttonPost: {
    width: '100%',
    backgroundColor: 'var(--color-text-tab)',
    border: 'none',
    borderRadius: '8px',
    height: '36px',
    cursor: 'pointer',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: 'var(--button-blue-hover)',
    },
  },
  buttonPostText: {
    fontSize: '15px',
    fontWeight: '500',
    color: 'var(--primary-text-button)',
    // opacity: '1',
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    padding: '1rem 0',
  },

  image: {
    width: 'calc(99% / 2)',
    marginBottom: '0.2rem',
    borderRadius: '8px',
  },
  //
  topFixed: {},
  bottomFixed: {
    padding: '1rem',
    width: '100%',
    backgroundColor: 'var(--background-post)',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: '0',
    },
  },
  scroll: {
    maxHeight: '50vh',
    overflowY: 'auto',
  },

  formatPresetsContainer: {
    padding: '0 1rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  formatPresetsTitle: {
    height: '38px',
    width: '38px',
    borderRadius: '8px',
    cursor: 'pointer',
  },

  formatPresetsItem: {
    margin: '0.25rem',
    height: '32px',
    width: '32px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  backgroundPresetsContainer: {
    width: 'calc(100% + 2rem)',
    margin: '-1rem',
    position: 'relative',
  },
  backgroundPresets: {
    width: '100%',
  },
  textAreaContainerTextPresets: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& textarea': {
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: '700',
      width: '90%',
      '&::placeholder': {
        fontSize: '2rem',
        fontWeight: '700',
      },
    },
  },
  resetPresets: {
    backgroundColor: '#18191A',
    margin: '0.25rem',
    height: '32px',
    width: '32px',
    borderRadius: '8px',
    border: '2px solid #33363A',
    cursor: 'pointer',
  },
}));
