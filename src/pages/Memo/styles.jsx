import styled from "@emotion/styled";
import {BACKGROUND_BLACK_COLOR, BACKGROUND_COLOR, BACKGROUND_LINE, GRAY_COLOR, WHITE_COLOR} from "../../styles/common";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const MemoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 600px;
  overflow-y: scroll;
  margin: 0 auto;
  padding-top: 80px;
`;

export const MemoList = styled.div`
  & > div:not(:last-of-type) {
    border-bottom: 1px solid ${BACKGROUND_LINE};
  }
`;

export const MemoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    font-size: 18px;
    font-weight: 600;
  }
  button {
    background-color: ${BACKGROUND_COLOR};
    cursor: pointer;
    color: ${GRAY_COLOR};
    font-size: 16px;
    font-weight: 400;
    margin-left: auto;
    padding: 12px 24px;
    transition: background-color, color 0.15s ease-in;
    &:hover {
      background-color: ${BACKGROUND_BLACK_COLOR};
      color: ${WHITE_COLOR};
    }
  }
`;
