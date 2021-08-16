import { makeStyles } from '@material-ui/core';
import { theme } from '../../../../common/theme';
import comboIcon1 from '../../../../common/images/comboIcon1.png';

export const useStyles = makeStyles((theme) => ({
  iconMuiNavRight: {
    width: '30px',
    height: '30px',
  },
  containerIconRight: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50px',
    margin: '0 0.25rem',
    cursor: 'pointer',
  },
  container: {
    width: '343px',
    height: '100%',
    backgroundColor: 'var(--background-post)',
    boxShadow: theme.shadows[5],
    borderRadius: '8px',
    border: '1px solid var(--border-item)',
  },

  nameVsDes: {
    marginLeft: '8px',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },

  tools: {
    padding: '0.5rem 0',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 8px',
    padding: '4px',
    transition: 'all 0.2s',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-1)',
    },
  },

  itemText: {
    fontWeight: '500',
    marginLeft: '14px',
  },

  // button
  iconRight: {
    width: '16px',
    height: '16px',
    filter: 'invert(100%)',
  },
  iconRightText: {
    fontWeight: '500',
    marginLeft: '8px',
    color: 'var(--primary-text-button)',
  },
}));
