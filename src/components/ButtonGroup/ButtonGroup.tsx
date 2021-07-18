import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";

const ButtonContainer = styled.div`
  background: #161932;
  width: 376px;
  padding: 10px 0px;
  margin: 0 auto;
  border-radius: 30px;
`

const StyledButton = styled(Button)<{active: boolean}>`
  background: ${props => props.active ?  '#F87070' : 'transparent'};
  color: ${props => props.active ?  '#1E213F' : '#D7E0FF'};
`;

type ButtonText = 'pomodoro' | 'short-break' | 'long-break';

interface IButtonGroupProps {
  active: ButtonText,
}

const ButtonGroup: React.FunctionComponent<IButtonGroupProps> = ({active}) => {
  return (
    <ButtonContainer>
      <StyledButton active={active === 'pomodoro'}>pomodoro</StyledButton>
      <StyledButton active={active === 'short-break'}>short break</StyledButton>
      <StyledButton active={active === 'long-break'}>long break</StyledButton>
    </ButtonContainer>
  )
}

export default ButtonGroup;
