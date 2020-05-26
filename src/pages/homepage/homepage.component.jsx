import React from 'react';

import DirectoryMenu from '../../components/directory/directory-menu.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <DirectoryMenu/>
  </div>
);

export default HomePage;