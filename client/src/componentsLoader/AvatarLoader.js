import React from 'react';
import ContentLoader from 'react-content-loader';

const AvatarLoader = (props) => (
  <ContentLoader
    width={'100%'}
    height={'100%'}
    // viewBox="0 0 400 170"
    backgroundColor="cyan"
    foregroundColor="pink"
    style={{ borderRadius: '50%' }}
    {...props}
  >
    <circle cx="50%" cy="100%" r="100%" />
  </ContentLoader>
);

AvatarLoader.metadata = {
  name: 'Dhruvit Galoriya', // My name
  github: 'dhruvgaloriya', // Github username
  description: 'Show Profile Page', // Little tagline
  filename: 'ProfileShow', // filename of your loader
};

export default AvatarLoader;
