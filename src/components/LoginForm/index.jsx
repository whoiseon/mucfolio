import {memo, useCallback, useEffect, useState} from "react";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import SaveIcon from '@mui/icons-material/Save';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DevLink, FormWrapper, Header, Input, InputWrapper, SignUpLink, TextHighlight} from "./styles";
import useInput from "../../hooks/useInput";
import {Copyright, ErrorMessage, MainButton, MainLoadingButton} from "../../styles/common";
import {userLogIn} from "../../slices/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [errorMessage, setErrorMessage] = useState('');

  const { userLogInError, userLogInLoading } = useSelector((state) => state.user);

  const onSubmitLogin = useCallback(async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('이메일을 입력해주세요');
      return;
    }
    if (!password) {
      setErrorMessage('비밀번호를 입력해주세요');
      return;
    }
    await dispatch(userLogIn({
      email,
      password,
    }));
    await navigate('/');
  }, [email, password]);

  useEffect(() => {
    setErrorMessage(userLogInError);
  }, [userLogInError]);

  return (
    <FormWrapper>
      <Header>
        <h1>Welcome to <TextHighlight>Mucfolio</TextHighlight></h1>
        <p>로그인 후 <TextHighlight>먹폴리오</TextHighlight>를 이용하실 수 있습니다.</p>
      </Header>
      <InputWrapper>
        <Input type="text" value={email} onChange={onChangeEmail} placeholder="아이디" />
        <Input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
      </InputWrapper>
      { errorMessage && <ErrorMessage>{ errorMessage }</ErrorMessage> }
      {
        userLogInLoading
          ? (
            <MainLoadingButton
              loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              로그인 중...
            </MainLoadingButton>
          )
          : (
            <MainButton
              type="submit"
              startIcon={<LockOpenIcon />}
              onClick={onSubmitLogin}
            >
              로그인
            </MainButton>
          )
      }
      <SignUpLink>
        <Link to="/signup">아직 회원이 아니신가요? <TextHighlight>회원가입</TextHighlight></Link>
      </SignUpLink>
      <DevLink>
        <a href="https://github.com/whoiseon" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="mailto: whois.cloud.dev@gmail.com" title="whois__@naver.com">
          <MailIcon />
        </a>
      </DevLink>
      <Copyright>Copyright 2022. INSEON. All rights reserved.</Copyright>
    </FormWrapper>
  );
};

export default memo(LoginForm);
