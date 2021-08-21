import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  inputContainer: {
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
    left: '0',
  },
  iconInput: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
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
    borderRadius: '50px',
    resize: 'none',
    fontSize: '15px',
    fontFamily: "'Roboto', sans-serif",
    outline: 'none',
    '&:focus': {
      border: 'none',
    },
  },
}));
