import styled from "@emotion/styled";
import {BACKGROUND_COLOR, WHITE_COLOR} from "../../styles/common";

export const ItemWrapper = styled.div`
  a {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
    background-color: inherit;
    color: inherit;
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
