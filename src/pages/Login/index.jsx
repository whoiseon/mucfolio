import logo from "../../assets/logo.svg";
import {Background, LoginWrapper, LogoWrapper} from "./styles";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <Background>
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
    </Background>
  );
};

export default Login;
