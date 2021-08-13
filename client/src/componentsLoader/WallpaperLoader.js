import React from 'react';
import ContentLoader from 'react-content-loader';

const WallpaperLoader = (props) => (
  <ContentLoader
    width={'100%'}
    height={'100%'}
    // viewBox="0 0 450 400"
    backgroundColor="cyan"
    foregroundColor="pink"
    style={{
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
    }}
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="0" width="100%" height="100%" />
  </ContentLoader>
);

WallpaperLoader.metadata = {
  name: 'Nic Bovee', // My name
  github: 'ghettifish', // Github username
  description: 'A simple favorite from the DoorDash local favorites.', // Little tagline
  filename: 'DoorDashFavorite', // filename of your loader
};

export default WallpaperLoader;
