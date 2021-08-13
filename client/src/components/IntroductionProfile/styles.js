import { makeStyles } from '@material-ui/core';
import comboEarth from '../../common/images/comboEarth.png';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'var(--background-post)',
    borderRadius: '8px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
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
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0',
  },
  iconWhere: {
    filter: 'invert(60%)',
  },
  textWhere: {
    fontSize: '15px',
    marginLeft: '0.75rem',
  },
  textWhereMain: {
    fontSize: '15px',
    fontWeight: '500',
  },
  containerSlogan: {
    padding: '1rem 0',
  },
  slogan: {
    paddingTop: '1rem',
    textAlign: 'center',
  },
  textAreaContainer: {
    width: '100%',
  },
  textArea: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: 'var(--background-searchBar)',
    border: 'none',
    width: '100%',
    height: '78px',
    borderRadius: '8px',
    padding: '8px 12px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '500',
    outline: 'none',
    resize: 'none',
    '&:hover': {
      backgroundColor: 'var(--hover-icon-overlay)',
    },
  },
  characterLeft: {
    fontSize: '13px',
    color: 'var(--secondary-text)',
    textAlign: 'right',
  },
  earthContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  earthIcon: {
    backgroundImage: `url(${comboEarth})`,
    backgroundPosition: '0px -21px',
    backgroundSize: '21px 189px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(90%)',
  },
  earthIconText: {
    fontSize: '15px',
    marginLeft: '0.5rem',
  },
  buttonSaveVsRemoveVsPublic: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '0.2rem',
  },
  buttonRemoveContainer: {
    padding: '6px 12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'var(--secondary-button-background)',
    marginRight: '4px',
    transition: 'all 0.1s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-icon-overlay)',
    },
  },
  buttonSaveContainerDisable: {
    padding: '6px 12px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'not-allowed',
    backgroundColor: 'var(--disabled-button-background)',
  },
  textRemoveButton: {
    fontSize: '15px',
    fontWeight: '500',
  },
  textSaveButtonDisable: {
    fontSize: '15px',
    fontWeight: '500',
    opacity: '0.4',
  },
  buttonSaveContainer: {
    padding: '6px 12px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.1s',
    backgroundColor: 'var(--button-blue)',
    '&:hover': {
      backgroundColor: 'var(--button-blue-hover)',
    },
  },
  textSaveButton: {
    fontSize: '15px',
    fontWeight: '500',
    color: 'var(----primary-text-button)',
  },

  containerEditing: {
    position: 'relative',
  },

  loadingCmp: {
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'var(--background-post)',
      opacity: '0.8',
      transform: 'scaleX(1)',
    },
  },
  upperLoadingDiv: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));
