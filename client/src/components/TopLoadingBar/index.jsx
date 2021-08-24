import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';

const TopLoadingBar = (props) => {
  const isLoading = useSelector((state) => state.loaderStore.isLoading);
  return (
    isLoading && (
      <ContentLoader
        {...props}
        width={'100%'}
        height={3}
        // viewBox="0 0 450 400"
        backgroundColor="#97e2ff"
        foregroundColor="#e76fff"
        style={{
          position: 'fixed',
          top: '56px',
          zIndex: '99999999999',
        }}
      >
        <rect x="0" y="0" rx="8" ry="0" width="100%" height="100%" />
      </ContentLoader>
    )
  );

  TopLoadingBar.metadata = {
    name: 'Gia An', // My name
    github: 'buigiaanfb1', // Github username
    description: 'A simple top loading bar like facebook.', // Little tagline
    filename: 'BarBarLineLoader', // filename of your loader
  };
};

export default TopLoadingBar;
