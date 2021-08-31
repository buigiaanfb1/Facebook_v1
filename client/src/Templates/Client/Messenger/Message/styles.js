import { makeStyles } from '@material-ui/core';
import { theme } from '../../../../common/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 56px)',
    background: 'pink',
    backgroundColor: 'var(--messenger-card-background)',
  },
  header: {
    padding: '1rem',
    boxShadow: '0 0 4px var(--shadow-2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerAvatarVsName: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  containerAvatar: {
    width: '40px',
    height: '32px',
  },
  avatar: {
    width: '32px',
    height: '32px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  nameBig: {
    fontWeight: '500',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  containerTools: {
    display: 'flex',
    // padding: '0 8px',
  },
  icon: {
    width: '31px',
    height: '31px',
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
  body: {
    height: 'calc(100vh - 85px - 41px - 56px)',
    overflow: 'hidden',
    '&:hover': {
      overflowY: 'auto',
      overflowY: 'overlay',
    },
  },
  introduce: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '1.5rem',
    '& img': {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
    },
  },
  nameIntroduce: {
    fontSize: '17px',
    fontWeight: '500',
    padding: '0.35rem 0 0rem',
  },
  infoIntroduce: {
    color: 'var(--secondary-text)',
    fontSize: '14px',
    lineHeight: '170%',
    fontWeight: 'normal',
  },
  inputContainer: {
    // backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
    // height: '100%',
    padding: '4px 8px',
    position: 'absolute',
    bottom: '0',
    left: '0',
  },
  iconLike: {
    width: '36px',
    height: '36px',
  },
  messagesContainer: {
    padding: '0.25rem 0.5rem',
  },
  left: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingBottom: '0.5rem',
  },
  avatarInChatContainer: {
    width: '36px',
    height: '28px',
  },
  avatarInChat: {
    width: '28px',
    height: '28px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  messageContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    backgroundColor: 'var(--hover-overlay)',
    maxWidth: '60%',
    borderRadius: '18px',
    padding: '7px 12px 8px',
    /* These are technically the same, but use both */
    overflowWrap: 'break-word',
    wordWrap: 'break-word',

    MsWordBreak: 'break-all',
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    wordBreak: 'break-all',
    /* Instead use this non-standard one: */
    wordBreak: 'break-word',

    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    MsHyphens: 'auto',
    MozHyphens: 'auto',
    WebkitHyphens: 'auto',
    hyphens: 'auto',
  },
  content: {
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '19px',
  },
  messageBackground: {
    backgroundColor: 'rgba(0, 132, 255) !important',
  },
  contentRight: {
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '19px',
    color: 'var(--always-white)',
  },
  right: {
    paddingRight: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '0.5rem',
  },
  imageTest: {
    display: 'block',
    maxWidth: '70%',
    borderRadius: '20px',
    maxHeight: '200px',
  },
  containerImageVsContentRight: {
    width: '100%',
    '& img': {
      display: 'block',
      maxWidth: '70%',
      borderRadius: '20px',
      maxHeight: '200px',
      marginLeft: 'auto',
    },
  },
  wrapperContainerImageVsContentRight: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  containerImageVsContentLeft: {
    width: '100%',
    '& img': {
      display: 'block',
      maxWidth: '70%',
      borderRadius: '20px',
      maxHeight: '200px',
      marginRight: 'auto',
    },
  },
  wrapperContainerImageVsContentLeft: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  time: {
    color: 'var(--secondary-text)',
    fontSize: '12px',
    textAlign: 'center',
  },
}));
