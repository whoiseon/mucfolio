import styled from "@emotion/styled";
import {BACKGROUND_BLACK_COLOR, BACKGROUND_BLACK_LINE, MAIN_COLOR, WHITE_COLOR} from "../../styles/common";

export const ItemWrapper = styled.div`
  
`;

export const ProjectDetail = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  background-color: ${BACKGROUND_BLACK_COLOR};
  a > button > span {
    color: ${WHITE_COLOR};
  }
  button:last-of-type {
    color: #646B74;
    transition: color 0.15s ease;
    &:hover {
      color: ${WHITE_COLOR};
    }
  }
`;

export const ScheduleButton = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  background-color: ${(props) => (props.status ? MAIN_COLOR : BACKGROUND_BLACK_COLOR)};
  color: ${(props) => (props.status ? 'white' : WHITE_COLOR)};
  padding: 20px 16px;
  cursor: pointer;
  transition: background-color, color 0.15s ease-in;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${BACKGROUND_BLACK_LINE};
  }
  &:hover {
    background-color: ${(props) => (props.status ? '#593AB9' : '#252B2F')};
  }
  &:active {
    background-color: #293034;
  }
  img {
    margin-right: 8px;
  }
  p {
    margin-left: auto;
    color: ${(props) => (props.status ? 'white' : '#646B74')};
  }
`;
