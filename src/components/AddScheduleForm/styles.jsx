import styled from "@emotion/styled";
import {BACKGROUND_COLOR, WHITE_COLOR} from "../../styles/common";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  input {
    background-color: ${BACKGROUND_COLOR};
    border: none;
    color: ${WHITE_COLOR};
    font-size: 28px;
    margin-bottom: 40px;
  }
  & .quill {
    & .ql-toolbar .ql-stroke {
      fill: none;
      stroke: #646B74;
    }
    & .ql-toolbar .ql-fill {
      fill: #646B74;
      stroke: none;
    }
    & .ql-toolbar .ql-picker {
      color: ${WHITE_COLOR};
    }
    & .ql-toolbar, .ql-container {
      border: none;
      padding: 0;
      font-family: inherit;
      font-size: 16px;
      & .ql-editor {
        padding: 20px 0 0;
        p {
          color: ${WHITE_COLOR};
        }
        &.ql-blank::before {
          content: attr(data-placeholder);
          color: #646B74;
          font-style: normal;
          font-size: 16px;
          left: 0;
          top: 20px;
        }
      }
    }
  }
`;
