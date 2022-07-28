import styled from "@emotion/styled";
import {BACKGROUND_BLACK_COLOR, BACKGROUND_BLACK_LINE, WHITE_COLOR} from "../../styles/common";

export const ItemWrapper = styled.div`
  
`;

export const ProjectDetail = styled.div`
  width: 100%;
  font-size: 14px;
  background-color: ${BACKGROUND_BLACK_COLOR};
`;

export const ScheduleButton = styled.button`
  display: block;
  text-align: left;
  width: 100%;
  background-color: ${BACKGROUND_BLACK_COLOR};
  color: ${WHITE_COLOR};
  padding: 20px 16px;
  cursor: pointer;
  transition: background-color 0.15s ease-in;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${BACKGROUND_BLACK_LINE};
  }
  &:hover {
    background-color: #252B2F;
  }
  &:active {
    background-color: #293034;
  }
`;
