import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {keyframes} from "@emotion/react";
import LoadingButton from "@mui/lab/LoadingButton";
import checkImage from "../assets/check.svg";

export const BACKGROUND_COLOR = '#343A3F';
export const BACKGROUND_BLACK_COLOR = '#2B3136';
export const MAIN_COLOR = '#6841DB';
export const SUB_COLOR = '#E54980';
export const GRAY_COLOR = '#646B74';
export const WHITE_COLOR = '#D3D8DE';
export const BACKGROUND_LINE = '#3B4146';
export const BACKGROUND_BLACK_LINE = '#33393E';

export const MainButton = styled(Button)`
  font-family: inherit;
  width: 100%;
  height: 56px;
  background-color: ${MAIN_COLOR};
  border-radius: 0;
  box-shadow: none;
  color: ${WHITE_COLOR};
  font-size: 16px;
  font-weight: 700;
  &:hover, &:active {
    background-color: #7B59E3;
  }
  &:disabled {
    background-color: ${BACKGROUND_COLOR};
    color: gray;
    border: 1px solid #454C52;
  }
`;

export const MainLoadingButton = styled(LoadingButton)`
  font-family: inherit;
  color: ${WHITE_COLOR};
  width: 100%;
  height: 56px;
  border-radius: 0;
  box-shadow: none;
`;

export const CheckboxWrapper = styled.div`
  width: 100%;
  font-size: 14px;
  margin: 20px 0;
  label {
    padding-left: 18px;
  }
`;

export const CheckBox = styled.input`
  display: none;
  & {
    display: inline-block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
  }
  &:before {
    content: '';
    position:absolute;
    left:0;
    top:0;
    width: 18px;
    height: 18px;
    text-align: center;
    background: ${BACKGROUND_COLOR};
    border:1px solid #454C52;
  }
  &:checked:after {
    content: '';
    position: absolute;
    background: url(${checkImage}) no-repeat 0px 0px;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
  }
`;

const ErrorAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  32% {
    transform: translateY(-4px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.p`
  color: ${SUB_COLOR};
  margin-bottom: 20px;
  animation: ${ErrorAnimation} 0.4s ease-in;
`;

export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 14px;
  font-weight: 700;
  color: #808993;
  border-radius: 30px;
  background-color: ${BACKGROUND_LINE};
  margin-right: 8px;
`;

export const Copyright = styled.p`
  margin-top: 40px;
  opacity: 0.2;
`;
