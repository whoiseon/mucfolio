import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";
import {BACKGROUND_BLACK_COLOR, BACKGROUND_COLOR, BACKGROUND_LINE, WHITE_COLOR} from "../../styles/common";

const MemoModalAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const CloseArea = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  animation: ${MemoModalAnimation} 0.16s ease;
`;

export const Background = styled.div`
  background-color: ${BACKGROUND_COLOR};
  color: ${WHITE_COLOR};
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  h1 {
    font-weight: 400;
    font-size: 14px;
    width: 100%;
    text-align: center;
    padding: 8px 0;
    border-bottom: 1px solid ${BACKGROUND_LINE};
  }
  form {
    input {
      width: 100%;
      color: ${WHITE_COLOR};
      background-color: ${BACKGROUND_BLACK_COLOR};
      border: none;
      padding: 8px 16px;
    }
  }
`;
