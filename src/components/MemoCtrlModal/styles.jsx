import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";
import {BACKGROUND_BLACK_COLOR} from "../../styles/common";

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

export const Background = styled.div`
  position: absolute;
  z-index: 9999;
  top: 62px;
  right: 16px;
  animation: ${MemoModalAnimation} 0.15s ease;
`;

export const ModalWrapper = styled.div`
  background-color: ${BACKGROUND_BLACK_COLOR};
  padding: 16px 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.15s ease-in;
  &:hover, &:active {
    background-color: #1E2326;
  }
`;
