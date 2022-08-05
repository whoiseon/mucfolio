import styled from "@emotion/styled";
import {BACKGROUND_BLACK_COLOR, BACKGROUND_COLOR, WHITE_COLOR} from "../../styles/common";

export const Toolbar = styled.div`
  margin-bottom: 20px;
  button {
    background-color: ${BACKGROUND_COLOR};
    color: #646B74;
    padding: 6px 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:not(:last-of-type) {
      margin-right: 10px;
    }
    &:hover {
      background-color: ${BACKGROUND_BLACK_COLOR};
      color: ${WHITE_COLOR};
    }
    &:active {
      background-color: #293034;
    }
  }
`;
