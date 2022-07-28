import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {keyframes} from "@emotion/react";
import {BACKGROUND_BLACK_LINE, WHITE_COLOR} from "../../styles/common";

const AccountModalAnimation = keyframes`
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
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

export const Background = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 49px;
  left: 16px;
  width: 240px;
  background-color: #2B3136;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  animation: ${AccountModalAnimation} 0.16s ease;
`;

export const MyProfile = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0 16px 16px;
`;

export const MyEmail = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  color: #808993;
  padding: 16px 16px 0;
`;

export const AccountMenu = styled.div`
  width: 100%;
  background-color: #252B2F;
  border-top: 1px solid ${BACKGROUND_BLACK_LINE};
  font-size: 14px;
`;

export const AccountMenuButton = styled(Button)`
  display: block;
  color: ${WHITE_COLOR};
  text-align: left;
  width: 100%;
  padding: 16px;
  &:hover, &:active {
    background-color: #1E2326;
  }
`;
