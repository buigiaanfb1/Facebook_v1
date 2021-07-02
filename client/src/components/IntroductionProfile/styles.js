import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'var(--background-post)',
    borderRadius: '8px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
  },
  button: {
    width: '100%',
    height: '36px',
    padding: '0 12px',
    margin: '10px 0',
    backgroundColor: 'var(--background-button)',
    border: 'none',
    borderRadius: '8px',
    transition: 'all 0.2s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--background-button-hover)',
    },
  },
  titleButton: {
    fontSize: '15px',
    fontWeight: '500',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0',
  },
  iconWhere: {
    filter: 'invert(60%)',
  },
  textWhere: {
    fontSize: '15px',
    marginLeft: '0.75rem',
  },
  textWhereMain: {
    fontSize: '15px',
    fontWeight: '500',
  },
}));
