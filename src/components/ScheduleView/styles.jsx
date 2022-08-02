import styled from "@emotion/styled";
import {BACKGROUND_BLACK_COLOR, BACKGROUND_COLOR, BACKGROUND_LINE, MAIN_COLOR, WHITE_COLOR} from "../../styles/common";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SubMenu = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${BACKGROUND_LINE};
`;

export const CtrlButtonWrapper = styled.div`
  margin-left: auto;
`;

export const CtrlButton = styled.button`
  padding: 16px 30px;
  background-color: ${BACKGROUND_COLOR};
  border-left: 1px solid ${BACKGROUND_LINE};
  color: ${WHITE_COLOR};
  cursor: pointer;
  transition: background-color, color 0.15s ease;
  &:hover {
    background-color: ${BACKGROUND_BLACK_COLOR};
  }
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 600px;
  overflow-y: scroll;
  margin: 0 auto;
  padding-top: 80px;
  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  & > p:nth-of-type(1) {
    font-size: 16px;
    color: #646B74;
  }
`;

export const SkeletonWrapper = styled.div`
  opacity: 0.5;
  & > div > p:nth-of-type(1) {
    margin-bottom: 40px;
  }
  & > div > p:nth-of-type(2) {
    width: 100%;
  }
`;

export const ScheduleContent = styled.p`
  color: ${WHITE_COLOR};
  width: 100%;
  line-height: 34px;
  padding: 40px 0;
`;

export const ScheduleCheck = styled.div`
  border-top: 1px solid ${BACKGROUND_LINE};
  button {
    display: flex;
    align-items: center;
    width: 100%;
    border-right: 1px solid ${BACKGROUND_LINE};
    background-color: ${(props) => (props.status ? MAIN_COLOR : BACKGROUND_COLOR)};
    color: ${WHITE_COLOR};
    font-size: 14px;
    cursor: pointer;
    padding: 15px 40px;
    transition: background-color 0.15s ease;
    &:hover {
      background-color: ${(props) => (props.status ? '#593AB9' : BACKGROUND_BLACK_COLOR)};;
    }
    img {
      margin-right: 12px;
    }
  }
`;

export const CommentWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  div {
    display: flex;
    p:nth-of-type(1) {
      color: ${WHITE_COLOR};
    }
    p:nth-of-type(2) {
      color: #646B74;
      margin-left: auto;
    }
  }
`;
