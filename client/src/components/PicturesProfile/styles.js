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
  linkAll: {
    marginLeft: 'auto',
    color: 'var(--color-blue)',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '0.75rem',
  },
  image: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
    // objectFit: 'cover',
  },

  //
  image0Radius: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
  },
  image4Radius: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
    borderRadius: '8px',
  },
  image1TopLeftRadius: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
    borderTopLeftRadius: '8px',
  },
  image1TopRightRadius: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
    borderTopRightRadius: '8px',
  },
  image1BottomLeftRadius: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
    borderBottomLeftRadius: '8px',
  },
  image1BottomRightRadius: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
    borderBottomRightRadius: '8px',
  },
  image2TopLeftBottomLeftRadius: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
  },
  image2TopRightBottomRightRadius: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  image2BottomRightBottomLeftRadius: {
    width: 'calc(100% / 3)',
    height: '106.66px',
    padding: '2px',
    borderBottomRightRadius: '8px',
    borderBottomLeftRadius: '8px',
  },
}));
