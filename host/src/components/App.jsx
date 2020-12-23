import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./MainPage"

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

const Page1 = React.lazy(() => import('page1/App'));

const App = () => {
  // const [clicks, setClicks] = React.useState(0);

  const onLinkClick = () => {
    // setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <BrowserRouter>
      <Nav>
        <StyledLink to="/" onClick={onLinkClick}>Main</StyledLink>
        <StyledLink to="/page1" onClick={onLinkClick}>Page1</StyledLink>
        {/* <span>Current clicks: {clicks}</span> */}
      </Nav>

      <Content>
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Content>
    </BrowserRouter>
  )
}

export default App;