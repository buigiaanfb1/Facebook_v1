import React from 'react';
import ContentLoader from 'react-content-loader';

const ThreeDots = (props) => (
  <ContentLoader
    viewBox="0 0 400 160"
    width={'100%'}
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="180" cy="86" r="4" />
    <circle cx="194" cy="86" r="4" />
    <circle cx="208" cy="86" r="4" />
  </ContentLoader>
);

ThreeDots.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
};

export default ThreeDots;
