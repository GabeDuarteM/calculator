import React from "react";
import styled from "styled-components/macro";

const getCssBackgroundColor = variant => {
  let bg;
  let bgActive;
  switch (variant) {
    case "dim":
      bg = "#424549";
      bgActive = "#616467";
      break;
    case "accent":
      bg = "#F3A13C";
      bgActive = "#bb7d2d";
      break;
    default:
      bg = "#616467";
      bgActive = "#878a8e";
      break;
  }

  return `background-color: ${bg}; :active {background-color: ${bgActive}}`;
};

const StyledButton = styled.button`
  all: unset;
  font-size: 20px;
  ${({ variant }) => getCssBackgroundColor(variant)}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = ({ variant, className, children }) => (
  <StyledButton className={className} variant={variant}>
    {children}
  </StyledButton>
);

export default Button;
