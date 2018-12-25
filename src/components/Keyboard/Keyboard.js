import React from "react";
import styled from "styled-components/macro";
import Button from "../Button";

const StyledKeyboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1px;
`;

const DoubleSizedButton = styled(Button)`
  grid-column-end: 3;
  grid-column-start: 1;
`;

const Keyboard = ({ className }) => {
  return (
    <StyledKeyboard className={className}>
      <Button variant="dim">AC</Button>
      <Button variant="dim">±</Button>
      <Button variant="dim">%</Button>
      <Button variant="accent">÷</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button variant="accent">×</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button variant="accent">−</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button variant="accent">+</Button>
      <DoubleSizedButton>0</DoubleSizedButton>
      <Button>,</Button>
      <Button variant="accent">=</Button>
    </StyledKeyboard>
  );
};

export default Keyboard;
