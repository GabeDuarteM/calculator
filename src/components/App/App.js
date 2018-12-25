import React from "react";
import styled from "styled-components/macro";

import Keyboard from "../Keyboard";
import Display from "../Display";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledDisplay = styled(Display)`
  flex: none;
  height: 81px;
`;

const StyledKeyboard = styled(Keyboard)`
  height: 100%;
`;

const App = () => (
  <StyledApp>
    <StyledDisplay />
    <StyledKeyboard />
  </StyledApp>
);

export default App;
