import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import asyncComponent from "./AsyncComponent";
import MainPage from "./MainPage";

// const Nav = styled.nav`
//   border-bottom: 2px solid black;
//   display: flex;
//   align-items: center;
// `;

const Content = styled.div`
  margin-top: 15px;
`;

// const StyledLink = styled(Link)`
//   padding: 10px;
//   margin-right: 10px;
// `;

const Page1 = asyncComponent(React.lazy(() => import('page1/App')));

const App = () => {
  // const [clicks, setClicks] = React.useState(0);

  const onLinkClick = () => {
    // setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/" onClick={onLinkClick}>Main</Link>
        <Link to="/page1" onClick={onLinkClick}>Page1</Link>
        {/* <span>Current clicks: {clicks}</span> */}
      </nav>

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