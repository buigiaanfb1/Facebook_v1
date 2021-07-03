import { makeStyles } from '@material-ui/core';
import comboPost4 from '../../common/images/comboPost4.png';
import { theme } from '../../common/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'var(--background-main)',
  },
  container: {
    display: 'block !important',
    padding: '1rem',
    margin: '1rem 2rem',
    borderRadius: '8px',
    backgroundColor: 'var(--background-post)',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    display: 'block',
    paddingBottom: '1rem',
  },

  item: {
    padding: '1rem',
    margin: '4px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    border: '1px solid var(--border-item)',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
  },
  nameContainer: {
    padding: '0 0rem 0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  name: {
    fontSize: '17px',
    fontWeight: '500',
  },
  job: {
    fontSize: '14px',
    color: 'var(--secondary-text)',
  },
  toolContainer: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.1s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--background-icon)',
    },
  },
  tool: {
    backgroundImage: `url(${comboPost4})`,
    backgroundPosition: '0px -83px',
    backgroundSize: '33px 1210px',
    width: '24px',
    height: '24px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    filter: 'invert(100%)',
  },
}));
