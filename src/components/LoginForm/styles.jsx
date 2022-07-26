import styled from "@emotion/styled";
import {MAIN_COLOR, SUB_COLOR, WHITE_COLOR} from "../../styles/common";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 414px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #3B4146;
  border: 1px solid #454C52;
  padding: 18px 20px;
  font-size: 16px;
  color: ${WHITE_COLOR};
  margin-bottom: 20px;
  transition: border 0.2s;
  &:focus {
    outline: none;
    border: 1px solid #667077;
  }
`;

export const Header = styled.div`
  margin-bottom: 40px;
  h1 {
    margin-bottom: 10px;
  }
`;

export const TextHighlight = styled.i`
  font-style: normal;
  color: ${SUB_COLOR};
`;

export const SignUpLink = styled.div`
  margin-top: 40px;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DevLink = styled.div`
  margin-top: 20px;
  border-top: 1px solid #454C52;
  padding-top: 20px;
  a {
    opacity: 0.3;
    margin-right: 14px;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
    svg {
      font-size: 32px;
    }
  }
`;
