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
    font-weight: bold;
    margin-bottom: 40px;
  }
`;
