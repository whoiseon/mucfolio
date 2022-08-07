import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK_COLOR,
  BACKGROUND_LINE,
  GRAY_COLOR,
  MAIN_COLOR,
  SUB_COLOR,
  WHITE_COLOR,
} from "../../styles/common";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 600px;
  overflow-y: scroll;
  margin: 0 auto;
  padding-top: 80px;
  h1 {
    font-size: 24px;
    margin-bottom: 40px;
    padding: 0 12px;
    span {
      color: ${SUB_COLOR};
    }
  }
`;

export const Dashboard = styled.div`
  display: flex;
  width: 100%;
`;

export const MyProject = styled.div`
  width: 50%;
  padding-right: 20px;
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid ${BACKGROUND_LINE};
    margin-bottom: 20px;
    h2 {
      font-size: 18px;
      font-weight: 500;
    }
    span {
      margin-left: auto;
      color: ${GRAY_COLOR};
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    a {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      padding: 8px 12px;
      color: ${GRAY_COLOR};
      transition: background-color, color 0.15s ease;
      svg {
        font-size: 16px;
        margin-right: 8px;
      }
      &:hover {
        color: ${WHITE_COLOR};
        background-color: ${BACKGROUND_BLACK_COLOR};
      }
    }
  }
`;

export const MyMemo = styled.div`
  width: 50%;
  padding-left: 20px;
  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid ${BACKGROUND_LINE};
    margin-bottom: 20px;
    h2 {
      font-size: 16px;
      font-weight: 500;
    }
    span {
      margin-left: auto;
      color: ${GRAY_COLOR};
    }
  }
  & > div:nth-of-type(2) {
    font-size: 14px;
    font-weight: 400;
    padding: 12px;
  }
`;
