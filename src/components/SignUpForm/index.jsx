import {memo, useCallback, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FormWrapper, Input, Header, InputWrapper, TextHighlight, SignUpLink} from "../LoginForm/styles";
import useInput from "../../hooks/useInput";
import {CheckBox, MainButton, CheckboxWrapper, WHITE_COLOR, ErrorMessage} from "../../styles/common";
import {userSignUp} from "../../slices/userSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, onChangeName, setName] = useInput('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage, userSignUpDone] = useState('');

  const onSubmitSignUp = useCallback(async (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('이름을 입력해주세요');
      return;
    }
    if (!email) {
      setErrorMessage('이메일을 입력해주세요');
      return;
    }
    if (!password) {
      setErrorMessage('비밀번호를 입력해주세요');
      return;
    }
    await dispatch(userSignUp({
      name,
      email,
      password,
    }));
  }, [name, email, password]);

  const onClickCheckbox = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  if (userSignUpDone) {
    navigate('/');
  }

  return (
    <FormWrapper>
      <Header>
        <h1>Sign Up <TextHighlight>Mucfolio</TextHighlight></h1>
        <p>간단한 회원가입으로 이용가능합니다</p>
      </Header>
      <InputWrapper>
        <Input type="text" value={name} onChange={onChangeName} placeholder="이름" />
        <Input type="text" value={email} onChange={onChangeEmail} placeholder="이메일" />
        <Input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
      </InputWrapper>
      { errorMessage && <ErrorMessage>{ errorMessage }</ErrorMessage> }
      <CheckboxWrapper>
        <CheckBox
          onClick={onClickCheckbox}
          type="checkbox"
          id="agree-check-box"
        />
        <label htmlFor="agree-check-box">
          서비스 약관 및 개인 정보 보호 정책을 동의하십니까?
        </label>
      </CheckboxWrapper>
      <MainButton
        type="submit"
        onClick={onSubmitSignUp}
        disabled={!checked}
      >
        회원가입
      </MainButton>
      <SignUpLink>
        <Link to="/">이미 회원이신가요? <TextHighlight>로그인</TextHighlight></Link>
      </SignUpLink>
    </FormWrapper>
  );
};

export default memo(SignUpForm);
