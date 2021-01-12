import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "../store/store";
import StoreCounter from "./StoreCounter";

const StyledContent = styled.div`
  font-size: 16px;
`

const Page = () => {
  const [clicks, setClicks] = React.useState(0)

  return (
    <Provider store={ store }>
      <StyledContent>
        Page content
        <div>
          Clicks: {clicks}
          <button onClick={() => setClicks(prevClicks => prevClicks + 1)}>+</button>
        </div>
        <StoreCounter />
      </StyledContent>
    </Provider>
  );
}

export default Page;