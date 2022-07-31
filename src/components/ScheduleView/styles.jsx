import styled from "@emotion/styled";
import {BACKGROUND_BLACK_COLOR, BACKGROUND_COLOR, BACKGROUND_LINE, WHITE_COLOR} from "../../styles/common";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 49px;
  border-bottom: 1px solid ${BACKGROUND_LINE};
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 80px;
  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  p:nth-of-type(1) {
    font-size: 16px;
    color: #646B74;
  }
`;

export const ScheduleContent = styled.p`
  color: ${WHITE_COLOR};
  width: 100%;
  line-height: 34px;
  padding: 40px 0;
  border-bottom: 1px solid ${BACKGROUND_LINE};
`;

export const ScheduleCheck = styled.div`
  padding: 28px 0;
  border-bottom: 1px solid ${BACKGROUND_LINE};
  button {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${BACKGROUND_COLOR};
    color: ${WHITE_COLOR};
    font-size: 16px;
    cursor: pointer;
    padding: 12px 16px;
    transition: background-color 0.15s ease;
    &:hover {
      background-color: ${BACKGROUND_BLACK_COLOR};
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
