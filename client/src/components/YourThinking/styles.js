import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';
import comboPost from '../../common/images/comboPost.png';

export const useStyles = makeStyles((theme) => ({
  yourThinkingContainer: {
    backgroundColor: 'var(--background-post)',
    borderRadius: '8px',
    padding: '12px 16px 10px 16px',
  },

  avatarVsInput: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid var(--border-bottom-nav)',
    paddingBottom: '0.75rem',
  },
  avatar: {
    width: '40px',
    height: '40px',
    marginRight: '0.5rem',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  input: {
    borderRadius: '40px',
    outline: 'none',
    border: 'none',
    height: '40px',
    width: '100%',
    backgroundColor: 'var(--background-searchBar)',
    padding: '0 16px',
    fontSize: '18px',
    color: 'var(--primary-text)',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-icon-overlay)',
    },
  },

  toolsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '8px',
  },
  tool: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    width: 'calc(100% / 3)',
    transition: 'all 0.3s',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'var(--hover-overlay)',
    },
  },
  liveStream: {
    backgroundImage: `url(${comboPost})`,
    backgroundPosition: '0 -82px',
    backgroundSize: '49px 508px',
    width: '24px',
    height: '24px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },
  pictureVideo: {
    backgroundImage: `url(${comboPost})`,
    backgroundPosition: '0 -357px',
    backgroundSize: '49px 508px',
    width: '24px',
    height: '24px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },
  emotion: {
    backgroundImage: `url(${comboPost})`,
    backgroundPosition: '0 -257px',
    backgroundSize: '49px 508px',
    width: '24px',
    height: '24px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },
  text: {
    marginLeft: '8px',
    color: 'var(--secondary-text)',
    fontSize: '16px',
    fontWeight: '500',
  },
}));
