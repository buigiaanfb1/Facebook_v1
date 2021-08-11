import { makeStyles } from '@material-ui/core';
import { theme } from '../../../common/theme';
import comboTool2 from '../../../common/images/comboTool2.png';
import comboTools3 from '../../../common/images/comboTools3.png';

export const useStyles = makeStyles((theme) => ({
  yourThinking: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
  },
  input: {
    height: '36px',
    width: '100%',
    borderRadius: '50px',
    outline: 'none',
    border: 'none',
    backgroundColor: 'var(--hover-overlay)',
    padding: '8px 12px',
    marginTop: '2px',
    fontSize: '16px',
    fontWeight: '300',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    resize: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  avatarOtherPeople: {
    minWidth: '32px',
    height: '32px',
    marginRight: '0.5rem',
    borderRadius: '50%',
  },
  containerIcon: {
    position: 'absolute',
    bottom: '50%',
    right: '0rem',
    transform: 'translate(-50%, 50%)',
    zIndex: 1,
  },
  containerIconPicture: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.1s',
    '&:hover': {
      backgroundColor: 'var(--background-button)',
    },
  },
  icon: {
    backgroundImage: `url(${comboTool2})`,
    backgroundPosition: '0px -416px',
    backgroundSize: '25px 813px',
    width: '16px',
    height: '16px',
    verticalAlign: '-0.25em',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(70%)',
  },
  imageContainer: {
    padding: '1rem 3rem',
    position: 'relative',
    width: '100%',
    '& img': {
      width: '40%',
      height: 'auto',
    },
  },
  toolContainer: {
    position: 'absolute',
    top: '0.75rem',
    right: '1rem',
  },
  deletePictureUpload: {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: 'var(--background-button)',
    transition: 'all 0.1s',
    '&:hover': {
      backgroundColor: 'var(--background-button-hover)',
    },
  },
  deleteIcon: {
    backgroundImage: `url(${comboTools3})`,
    backgroundPosition: '-146px -134px',
    backgroundSize: '189px 164px',
    width: '12px',
    height: '12px',
    verticalAlign: '-0.25em',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(89%) sepia(6%) hue-rotate(185deg)',
  },
}));
