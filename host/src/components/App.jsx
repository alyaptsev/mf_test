import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "@elamajs/ui-kit";
import asyncComponent from "./AsyncComponent";
import MainPage from "./MainPage";

const Nav = styled.nav`
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  margin-right: 10px;
`;

const Page1 = asyncComponent(React.lazy(() => import('page1/App')));

const App = () => {
  const [clicks, setClicks] = React.useState(0);

  const onLinkClick = () => {
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <BrowserRouter>
      <Nav>
        <StyledLink to="/" onClick={ onLinkClick }>Main</StyledLink>
        <StyledLink to="/page1" onClick={ onLinkClick }>Page1</StyledLink>
        <span>Current clicks: { clicks }</span>
      </Nav>

      <ThemeProvider theme={ theme }>
        <Content>
          <Switch>
            <Route path="/page1" component={ Page1 } />
            <Route path="/" component={ MainPage } />
          </Switch>
        </Content>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;