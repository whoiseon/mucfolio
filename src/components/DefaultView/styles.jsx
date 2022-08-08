import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";
import {BACKGROUND_BLACK_COLOR} from "../../styles/common";

const DefaultViewTextAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

export const DefaultViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  h1 {
    margin-top: 40px;
    font-size: 20px;
    opacity: 0.5;
    animation: ${DefaultViewTextAnimation} 0.6s ease-in-out;
  }
`;

const LogoAnimation = keyframes`
  0% {
    transform: rotate(0) scale(0);
  }
  100% {
    transform: rotate(365deg);
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  img {
    width: 180px;
    z-index: 99;
    animation: ${LogoAnimation} 0.6s ease-in-out;
  }
`;
