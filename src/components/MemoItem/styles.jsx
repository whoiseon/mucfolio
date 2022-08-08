import styled from "@emotion/styled";
import {BACKGROUND_LINE, GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 12px;
  cursor: pointer;
  border-bottom: 1px solid ${BACKGROUND_LINE};
  img {
    margin-right: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    p:nth-of-type(1) {
      margin-bottom: 4px;
    }
    p:nth-of-type(2) {
      font-size: 14px;
      color: ${GRAY_COLOR};
    }
  }
  svg {
    margin-left: auto;
    color: ${GRAY_COLOR};
    transition: color 0.15s ease-in;
    &:hover {
      color: ${WHITE_COLOR};
    }
  }
`;
