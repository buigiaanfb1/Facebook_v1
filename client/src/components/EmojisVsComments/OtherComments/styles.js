import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
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
    display: 'inline-flex',
    flexDirection: 'column',
    backgroundColor: 'var(--hover-overlay)',
    borderRadius: '18px',
    padding: '8px 12px',
  },
  nameVsCommentWithOutBgColor: {
    display: 'inline-flex',
    flexDirection: 'column',
    borderRadius: '18px',
    padding: '8px 12px',
  },
  nameOtherPeople: {
    fontSize: '13px',
    fontWeight: '500',
    display: 'inline',
  },
  commentOtherPeople: {
    fontSize: '15px',
    display: 'inline',
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
  imageOtherComment: {
    borderRadius: '16px',
    margin: '0rem 0rem',
    maxWidth: '400px',
  },
}));
