import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';
import comboPost1 from '../../common/images/comboPost1.png';
import comboPost2 from '../../common/images/full-combo.png';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '56px',
    backgroundColor: 'var(--background-post)',
    padding: '12px 16px 10px 16px',
    height: '100vh',
    position: 'relative',
  },
  avatarVsName: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: '0.75rem',
  },
  avatar: {
    width: '40px',
    height: '40px',
    marginRight: '0.5rem',
    borderRadius: '50%',
  },
  nameVsTimeContainer: {},
  name: {
    fontWeight: '500',
  },
  timeContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  time: {
    fontSize: '13px',
    fontWeight: '500',
    color: 'var(--secondary-text)',
  },
  privacyIcon: {
    backgroundImage: `url(${comboPost1})`,
    backgroundPosition: '0 -666px',
    backgroundSize: '25px 796px',
    width: '12px',
    height: '12px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(60%)',
  },
  commentContainer: {
    padding: '10px 0',
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
    width: '32px',
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
    position: 'sticky',
    bottom: '0',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--background-post)',
    padding: '0.5rem 0',
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

  // test
  containerClipPath: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  path: {
    width: 'calc(100% / 2)',
    maxHeight: '275px',
    border: '2px solid var(--background-post)',
    '& img': {
      width: '100%',
      height: '100%',
      maxHeight: '275px',
      objectFit: 'cover',
    },
  },
  pathMax: {
    width: 'calc(100% / 2)',
    maxHeight: 'px',
    maxHeight: '275px',
    border: '1px solid var(--background-post)',
    '& img': {
      width: '100%',
      height: '100%',
      maxHeight: '275px',
      objectFit: 'cover',
    },
  },
}));
