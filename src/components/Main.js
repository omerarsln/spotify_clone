import styled from "styled-components";
import MainHeader from "./MainHeader";

import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BrowsePage from "../pages/BrowsePage";
import LibraryPage from "../pages/LibraryPage";

const MainStyle = styled.div`
  background: linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%);
  width: 100%;
  color: white;
  overflow: auto;
`;

const MainContent = styled.div`
  padding: 0 0 150px 20px;
  > h1 {
    margin: 20px 0 0 10px;
  }
`;

const Main = () => {
  return (
    <MainStyle>
      <MainHeader />
      <MainContent>
        <Switch>
          <Route path="/gozat" component={BrowsePage} />
          <Route path="/kitaplık" component={LibraryPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </MainContent>
    </MainStyle>
  );
};

export default Main;
