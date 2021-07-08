import React from 'react';
import ContentLoader from 'react-content-loader';

const FacebookStyle = (props) => (
  <div
    style={{
      padding: '1rem',
      width: '100%',
      height: '20vh',
      backgroundColor: 'var(--background-post)',
      margin: '1rem 0rem',
      borderRadius: '8px',
    }}
  >
    <ContentLoader width={'100%'} {...props} height={'20vh'}>
      <rect x="48" y="8" width="88" height="6" rx="3" />
      <rect x="48" y="26" width="52" height="6" rx="3" />
      <rect x="0" y="56" width="100%" height="6" rx="3" />
      <rect x="0" y="72" width="100%" height="6" rx="3" />
      <rect x="0" y="88" width="90%" height="6" rx="3" />
      <circle cx="20" cy="20" r="20" />
    </ContentLoader>
  </div>
);

FacebookStyle.metadata = {
  name: 'DaniloWoz',
  github: 'danilowoz',
  description: 'Facebook style',
  filename: 'Facebook',
};

export default FacebookStyle;
