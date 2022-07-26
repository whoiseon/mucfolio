import styled from "@emotion/styled";
import {
  BACKGROUND_BLACK_COLOR,
  BACKGROUND_COLOR,
  BACKGROUND_LINE,
  GRAY_COLOR,
  MAIN_COLOR,
  WHITE_COLOR,
} from "../../styles/common";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 40px;
`;

export const EmptyProjectWrapper = styled.div`
  margin: 0 auto;
  h1 {
    color: ${GRAY_COLOR};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 24px;
    margin-bottom: 20px;
  }
  button {
    background-color: ${BACKGROUND_COLOR};
    border: 1px solid ${BACKGROUND_LINE};
    color: ${WHITE_COLOR};
    font-size: 14px;
    font-weight: 700;
    padding: 16px 0;
    width: 200px;
    cursor: pointer;
    transition: background-color 0.15s ease-in;
    &:hover, &:active {
      background-color: ${MAIN_COLOR};
    }
  }
`;
