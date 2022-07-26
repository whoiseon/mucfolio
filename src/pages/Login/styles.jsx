import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";
import {createTheme} from "@mui/material";
import {BACKGROUND_BLACK_COLOR, BACKGROUND_COLOR} from "../../styles/common";

export const Background = styled.div`
  height: 100%;
  display: flex;
`;

export const LoginWrapper = styled.div`
  height: 100%;
  z-index: 9;
  width: 100%;
  background-color: ${BACKGROUND_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 12px 0 16px rgba(0, 0, 0, 0.04);
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
  height: 100%;
  background-color: ${BACKGROUND_BLACK_COLOR};
  margin-left: auto;
  width: 50%;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    width: 220px;
    z-index: 99;
    animation: ${LogoAnimation} 0.6s ease-in;
  }
`;

export const checkBoxTheme = createTheme({
  palette: {
    primary: {
      main: '#724FDB',
      darker: '#724FDB',
    },
  },
});
