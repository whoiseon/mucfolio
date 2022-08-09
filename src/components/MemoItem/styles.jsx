import styled from "@emotion/styled";
import {BACKGROUND_BLACK_COLOR, BACKGROUND_COLOR, BACKGROUND_LINE, GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  background-color: ${BACKGROUND_COLOR};
`;

export const MemoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  p:nth-of-type(1) {
    margin-bottom: 4px;
    text-decoration: ${(props) => (props.status ? 'line-through' : 'normal')};
  }
  p:nth-of-type(2) {
    font-size: 14px;
    color: ${GRAY_COLOR};
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  opacity: ${(props) => (props.status ? '1' : '0.5')};
  transition: opacity 0.15s ease-in;
  &:hover {
    opacity: 1;
  }
`;

export const CtrlBtnWrapper = styled.div`
  margin-left: auto;
  padding: 20px;
  cursor: pointer;
  &:hover > svg {
    color: ${WHITE_COLOR};
  }
  svg {
    color: ${GRAY_COLOR};
    transition: color 0.15s ease-in;
  }
`;
