import styled from "@emotion/styled";
import {WHITE_COLOR} from "../../styles/common";

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  p {
    margin-top: 20px;
    color: ${WHITE_COLOR};
  }
`;
