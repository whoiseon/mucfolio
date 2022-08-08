import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {keyframes} from "@emotion/react";
import {BACKGROUND_COLOR, BACKGROUND_LINE, GRAY_COLOR, SUB_COLOR, WHITE_COLOR} from "../../styles/common";

export const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 380px;
  border-right: 1px solid ${BACKGROUND_LINE};
  padding-bottom: 70px;
`;

export const List = styled.div`
  overflow-y: scroll;
`;

export const ProjectButton = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  color: ${WHITE_COLOR};
  background-color: ${BACKGROUND_COLOR};
  width: 100%;
  border-bottom: 1px solid ${BACKGROUND_LINE};
  cursor: pointer;
  transition: background-color 0.15s ease-in;
  &:hover {
    background-color: #383E43;
    svg {
      color: ${WHITE_COLOR};
    }
  }
  &:active {
    background-color: #32383C;
  }
  svg {
    margin-left: auto;
    color: #656B73;
    transition: background-color 0.15s ease-in;
  }
`;

const ShowCtrlBtnAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ProjectCtrlBtn = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  font-size: 14px;
  animation: ${ShowCtrlBtnAnimation} 0.15s ease-in;
  svg {
    fill: ${GRAY_COLOR};
    font-size: 18px;
    transition: fill 0.2s ease-in;
    margin: 0;
    &:hover {
      fill: ${SUB_COLOR};
    }
  }
`;

export const AddProjectButton = styled.button`
  display: flex;
  position: absolute;
  bottom: 0;
  align-items: center;
  text-align: left;
  padding: 24px 16px;
  font-weight: 600;
  font-size: 16px;
  color: #646B74;
  background-color: ${BACKGROUND_COLOR};
  width: 100%;
  border-top: 1px solid ${BACKGROUND_LINE};
  margin-top: auto;
  cursor: pointer;
  transition: background-color, color 0.15s ease-in;
  &:hover {
    background-color: #383E43;
    color: ${WHITE_COLOR};
    svg {
      color: ${WHITE_COLOR};
    }
  }
  &:active {
    background-color: #32383C;
  }
`;
