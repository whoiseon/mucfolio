import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {BACKGROUND_COLOR, BACKGROUND_LINE, WHITE_COLOR} from "../../styles/common";

export const MenuWrapper = styled.div`
  min-width: 240px;
  border-right: 1px solid ${BACKGROUND_LINE};
`;

export const MenuButton = styled(Button)`
  font-family: inherit;
  display: flex;
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  color: ${WHITE_COLOR};
  font-weight: 500;
  &:hover, &:active {
    background-color: ${BACKGROUND_LINE}
  }
  svg {
    color: #646B74;
    margin-left: auto;
  }
`;

export const MenuList = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #646B74;
  background-color: ${BACKGROUND_COLOR};
  div:nth-of-type(1) {
    color: ${(props) => (
    props.isLocation === '/'
      ? WHITE_COLOR
      : '#646B74'
  )};
    background-color: ${(props) => (
    props.isLocation === '/'
      ? '#2B3136'
      : BACKGROUND_COLOR
  )};
  }
  div:nth-of-type(2) {
    color: ${(props) => (
    props.isLocation === '/project'
      ? WHITE_COLOR
      : '#646B74'
  )};
    background-color: ${(props) => (
    props.isLocation === '/project'
      ? '#2B3136'
      : BACKGROUND_COLOR
  )};
  }
  div:nth-of-type(3) {
    color: ${(props) => (
    props.isLocation === '/memo'
      ? WHITE_COLOR
      : '#646B74'
  )};
    background-color: ${(props) => (
    props.isLocation === '/memo'
      ? '#2B3136'
      : BACKGROUND_COLOR
  )};
  }
`;
