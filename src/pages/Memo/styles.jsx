import styled from "@emotion/styled";

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
  h1 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 40px;
  }
`;
