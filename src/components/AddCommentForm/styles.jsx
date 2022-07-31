import styled from "@emotion/styled";
import {BACKGROUND_COLOR, WHITE_COLOR} from "../../styles/common";

export const CommentForm = styled.form`
  margin-top: 40px;
  width: 100%;
  input {
    width: 100%;
    padding: 12px 0;
    background-color: ${BACKGROUND_COLOR};
    color: ${WHITE_COLOR};
    border: none;
    font-size: 16px;
  }
`;
