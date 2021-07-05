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

  containerImage: {
    position: 'relative',
    border: '2px solid var(--background-post)',
    width: 'calc(100% / 3)',
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
  },

  //
  image0Radius: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  image4Radius: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  image1TopLeftRadius: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: '8px',
    objectFit: 'cover',
  },
  image1TopRightRadius: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopRightRadius: '8px',
    objectFit: 'cover',
  },
  image1BottomLeftRadius: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: '8px',
    objectFit: 'cover',
  },
  image1BottomRightRadius: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderBottomRightRadius: '8px',
    objectFit: 'cover',
  },
  image2TopLeftBottomLeftRadius: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: '8px',
    objectFit: 'cover',
    borderBottomLeftRadius: '8px',
  },
  image2TopRightBottomRightRadius: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopRightRadius: '8px',
    objectFit: 'cover',
    borderBottomRightRadius: '8px',
  },
  image2BottomRightBottomLeftRadius: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderBottomRightRadius: '8px',
    objectFit: 'cover',
    borderBottomLeftRadius: '8px',
  },
}));
