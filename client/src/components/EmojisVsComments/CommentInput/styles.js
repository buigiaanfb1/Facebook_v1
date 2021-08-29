import { makeStyles } from '@material-ui/core';
import { theme } from '../../../common/theme';
import comboTool2 from '../../../common/images/comboTool2.png';
import comboTools3 from '../../../common/images/comboTools3.png';

export const useStyles = makeStyles((theme) => ({
  yourThinking: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50px',
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
    width: '32px',
    height: '32px',
    objectFit: 'cover',
    marginRight: '0.5rem',
    borderRadius: '50%',
  },
  containerIcon: {
    position: 'absolute',
    bottom: '50%',
    right: '0rem',
    transform: 'translate(-20%, 50%)',
    zIndex: 1,
    display: 'flex',
  },
  containerIconPicture: {
    position: 'relative',
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
  iconPicture: {
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
  iconEmojisPicker: {
    backgroundImage: `url(https://www.facebook.com/rsrc.php/v3/yg/r/Zy094W0d_I1.png)`,
    backgroundPosition: '0px -449px',
    backgroundSize: '25px 710px',
    width: '16px',
    height: '16px',
    verticalAlign: '-0.25em',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(80%)',
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
  emojisPickerContainer: {
    position: 'absolute',
    top: '45px',
    right: '0',
    zIndex: '999',
    '& aside': {
      border: '1px solid var(--border-item)',
      boxShadow: 'none',
      '& .emoji-categories': {
        '& button': {
          filter:
            'brightness(0) saturate(100%) invert(94%) sepia(0%) saturate(0%) hue-rotate(243deg) brightness(106%) contrast(105%)',
        },
      },
      backgroundColor: 'var(--background-nav)',
      '& .emoji-group::before': {
        backgroundColor: 'var(--background-nav)',
      },
    },
  },
}));
