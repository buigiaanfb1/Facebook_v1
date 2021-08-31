import { makeStyles } from '@material-ui/core';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: 'var(--primary-text)',
    backgroundColor: 'var(--background-searchBar)',
    marginLeft: 0,
    borderRadius: '50px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  searchIcon: {
    paddingLeft: '0.5rem',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    height: '40px',
    fontSize: '15px',
    color: 'var(--primary-text) !important',
    fontWeight: '300',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: '2.25rem !important',
    transition: theme.transitions.create('width'),
    width: '100%',
    width: '28ch !important',
    [theme.breakpoints.down('md')]: {
      width: '20ch !important',
    },
    [theme.breakpoints.down('xs')]: {
      width: '5ch !important',
    },
  },
}));
