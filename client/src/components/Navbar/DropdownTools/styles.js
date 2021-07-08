import { makeStyles } from '@material-ui/core';
import { theme } from '../../../common/theme';
import comboIcon1 from '../../../common/images/comboIcon1.png';

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
    padding: '1rem 1rem 0rem 1rem',
    backgroundColor: 'var(--background-post)',
    boxShadow: theme.shadows[5],
    borderRadius: '8px',
    border: '1px solid var(--border-item)',
  },
  profile: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    // paddingBottom: '1rem',
    margin: '-8px',
    padding: '8px',
    transition: 'all 0.2s',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-1)',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-10%',
      left: '0%',
      width: '100%',
      height: '1px',
      display: 'block',
      backgroundColor: 'var(--border-bottom-nav)',
    },
  },
  picture: {
    height: '60px',
    width: '60px',
    borderRadius: '50%',
  },
  nameVsDes: {
    marginLeft: '8px',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  name: {
    fontSize: '17px',
    fontWeight: '500',
  },
  des: {
    fontSize: '15px',
    color: 'var(--secondary-text)',
  },
  tools: {
    // padding: '1rem',
    marginTop: '1rem',
    padding: '1rem 0',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: '-8px',
    padding: '8px',
    transition: 'all 0.2s',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'var(--hover-1)',
    },
  },
  iconContainer: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--background-icon)',
  },
  logoutIcon: {
    backgroundImage: `url(${comboIcon1})`,
    backgroundPosition: '0px -681px',
    backgroundSize: '33px 1324px',
    width: '20px',
    height: '20px',
    backgroundRepeat: 'no-repeated',
    display: 'inline-block',
    filter: 'invert(90%)',
  },
  itemText: {
    fontWeight: '500',
    marginLeft: '14px',
  },
}));
