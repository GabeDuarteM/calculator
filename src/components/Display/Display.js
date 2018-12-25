import React from "react";
import styled from "styled-components/macro";

const StyledDisplay = styled.div`
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
  font-weight: 200;
  font-size: 48px;
  padding-bottom: 4px;
  padding-right: 16px;
  -webkit-app-region: drag;
`;

const Display = ({ className }) => {
  return <StyledDisplay className={className}>0</StyledDisplay>;
};

export default Display;
