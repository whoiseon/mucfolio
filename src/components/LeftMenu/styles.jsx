import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {BACKGROUND_COLOR, BACKGROUND_LINE, WHITE_COLOR} from "../../styles/common";

export const MenuWrapper = styled.div`
  width: 240px;
  border-right: 1px solid ${BACKGROUND_LINE};
`;

export const MenuButton = styled(Button)`
  font-family: inherit;
  display: flex;
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  color: ${WHITE_COLOR};
  font-weight: 600;
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
  a {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
    background-color: ${BACKGROUND_COLOR};
    color: #646B74;
    transition: background-color, color 0.2s ease;
    svg {
      font-size: 16px;
      margin-right: 8px;
    }
  }
  a:hover {
    background-color: #2B3136;
    color: ${WHITE_COLOR};
  }
`;
