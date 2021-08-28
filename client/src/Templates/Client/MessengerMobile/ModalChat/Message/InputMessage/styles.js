import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  inputContainer: {
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
  },
  iconInput: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-1)',
    },
  },
  textarea: {
    // height: '37px !important',
    width: '100%',
    position: 'relative',
    color: 'var(--primary-text)',
    backgroundColor: 'var(--background-searchBar)',
    border: 'none',
    padding: '0.6rem',
    borderRadius: '20px',
    resize: 'none',
    fontSize: '15px',
    fontFamily: "'Roboto', sans-serif",
    outline: 'none',
    '&:focus': {
      border: 'none',
    },
  },

  containerImagesUnsent: {
    width: '100%',
    height: '68px',
    display: 'flex',
  },

  containerImage: {
    position: 'relative',
    marginLeft: '-1rem',
    padding: '0 1rem',
  },
  containerCloseIcon: {
    position: 'absolute',
    top: '-15%',
    right: '5%',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#3E4042',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#000',
    },
  },
  closeIcon: {
    backgroundImage:
      'url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/rmgFaejTAFy.png)',
    backgroundPosition: '-82px -126px',
    backgroundSize: '189px 152px',
    width: '12px',
    height: '12px',
    verticalAlign: '-0.25em',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(89%) sepia(6%) hue-rotate(185deg)',
  },
  imageUnsent: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
  },
}));
