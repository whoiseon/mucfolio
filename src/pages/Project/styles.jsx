import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {BACKGROUND_COLOR, BACKGROUND_LINE, WHITE_COLOR} from "../../styles/common";

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
  border-right: 1px solid ${BACKGROUND_LINE}
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
