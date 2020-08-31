import React from "react";

import DirectoryMenu from "../../components/directory/directory-menu.component";

import { HomepageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomepageContainer>
    <h1>Welcome to my Homepage</h1>
    <DirectoryMenu />
  </HomepageContainer>
);

export default HomePage;
