import { makeStyles } from '@material-ui/core';
import comboPost1 from '../../common/images/comboPost1.png';
import like from '../../common/images/like.svg';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  commentContainer: {
    padding: '10px 0',
    width: '100%',
  },
  emojiContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '10px',
  },
  emojis: {
    display: 'flex',
    alignItems: 'center',
  },
  emoji: {
    width: '18px',
    height: '18px',
  },
  amountPeopleEmoji: {
    marginLeft: '0.5rem',
    color: 'var(--secondary-text)',
  },
  amountPeopleComment: {
    marginLeft: '0.5rem',
    color: 'var(--secondary-text)',
  },

  // TOOLSSSSSS
  tools: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '44px',
    borderTop: '1px solid var(--border-bottom-nav)',
    borderBottom: '1px solid var(--border-bottom-nav)',
  },

  tool: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% / 3)',
  },

  like: {
    backgroundImage: `url(${comboPost1})`,
    backgroundPosition: '0 -191px',
    backgroundSize: '25px 796px',
    width: '18px',
    height: '18px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(60%)',
  },
  comment: {
    backgroundImage: `url(${comboPost1})`,
    backgroundPosition: '0 -134px',
    backgroundSize: '25px 796px',
    width: '18px',
    height: '18px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(60%)',
  },
  share: {
    backgroundImage: `url(${comboPost1})`,
    backgroundPosition: '0 -210px',
    backgroundSize: '25px 796px',
    width: '18px',
    height: '18px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(60%)',
  },

  text: {
    marginLeft: '8px',
    color: 'var(--secondary-text)',
    fontSize: '16px',
    fontWeight: '500',
  },

  // SORT
  sortContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '0.5rem',
  },
  sortText: {
    fontWeight: '500',
    color: 'var(--secondary-text)',
  },
  sortIcon: {
    backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/zarCRvsDwAY.png)`,
    backgroundPosition: '0 -916px',
    backgroundSize: '33px 933px',
    width: '16px',
    height: '16px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(60%)',
    marginLeft: '4px',
  },

  // Comment section

  commentsSection: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '2px',
  },
  avatarOtherPeople: {
    minWidth: '32px',
    height: '32px',
    marginRight: '0.5rem',
    borderRadius: '50%',
  },
  nameVsCommentVsToolsContainer: {},
  nameVsComment: {
    backgroundColor: 'var(--hover-overlay)',
    borderRadius: '18px',
    padding: '8px 12px',
  },
  nameOtherPeople: {
    fontSize: '13px',
    fontWeight: '500',
  },
  commentOtherPeople: {
    fontSize: '15px',
  },
  toolsComment: {
    display: 'flex',
    padding: '2px 12px',
  },
  toolsCommentText: {
    fontSize: '12px',
    fontWeight: '700',
    color: 'var(--secondary-text)',
  },
  timeComment: {
    fontSize: '12px',
    fontWeight: '300',
    color: 'var(--secondary-text)',
  },

  // your thinking
  yourThinking: {
    display: 'flex',
    alignItems: 'center',
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
  },

  contentHavePicture: {
    padding: '0 16px 16px 16px',
  },

  contentPicture: {
    margin: '0 -16px',
  },

  picture: {
    width: '100%',
  },

  //test

  toolReaction: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% / 3)',
    '&:hover $reactionBox': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    '&:before': {
      content: '""',
      opacity: '0',
      display: 'block',
      width: '100%',
      height: '20px',
      position: 'absolute',
      top: '-20px',
      left: ' 0',
    },
  },

  reactionBox: {
    display: 'block',
    position: 'absolute',
    width: '330px',
    height: '45px',
    padding: '0 0.4rem',
    background: 'var(--background-main)',
    borderRadius: '28px',
    left: '0px',
    bottom: '35px',
    display: 'none',
  },
  reactionIcon: {
    position: 'relative',
    width: '40px',
    height: '40px',
    opacity: '0',
    transform: 'translate(0, 100px) scale(0)',
    // background: '#8959A8',
    borderRadius: '20px',
    textAlign: 'center',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&:hover': {
      transform: 'scale(1.2) !important',
      transformOrigin: 'bottom',
    },
    '&:hover $label': {
      visibility: 'visible',
    },
  },
  icon: {
    width: '100%',
  },
  label: {
    padding: '3px 5px 3px 5px',
    position: 'relative',
    top: '-24px',
    borderRadius: '10px',
    fontSize: '11px',
    color: '#FFF',
    background: '#333',
    visibility: 'hidden',
  },

  icon: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
}));
