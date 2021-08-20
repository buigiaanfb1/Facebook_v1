import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  search: {
    height: '37px',
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
  icon: {
    marginRight: '0.5rem',
  },

  inputRoot: {
    color: 'inherit',
    height: '37px',
    fontSize: '15px',
    color: 'var(--primary-text)',
    fontWeight: '300',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: '1rem',
    transition: theme.transitions.create('width'),
    width: '100%',
    // width: '2ch',
    // [theme.breakpoints.down('md')]: {
    //   width: '20ch',
    // },
    // [theme.breakpoints.down('xs')]: {
    //   width: '5ch',
    // },
  },
}));
