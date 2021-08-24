import { makeStyles } from '@material-ui/core';
import { theme } from '../../../common/theme';

export const useStyles = makeStyles((theme) => ({
  containerMessenger: {
    marginTop: '56px',
  },
  containerNavbar: {
    width: '360px',
    height: '100%',
    borderRight: '1px solid var(--border-bottom-nav)',
    position: 'fixed',
    top: '56px',
    left: '0',
    minWidth: '350px',
    [theme.breakpoints.down('lg')]: {
      minWidth: '260px',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '150px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  main: {
    marginLeft: '360px',
    flexGrow: 1,
    display: 'flex',
  },
  toggleContainerMessage: {
    width: '100%',
    backgroundColor: 'var(--messenger-card-background)',
    transition: 'all 1s',
  },
  containerMessage: {
    width: '75%',
    backgroundColor: 'var(--messenger-card-background)',
  },
  toggleContainerTools: {
    width: '0%',
    backgroundColor: 'var(--messenger-card-background)',
  },
  containerTools: {
    width: '25%',
    borderLeft: '1px solid var(--border-bottom-nav)',
    backgroundColor: 'var(--messenger-card-background)',
  },
  header: {},
  bodyRealtime: {},
  containerInput: {},
}));
