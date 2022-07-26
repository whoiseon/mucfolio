import {Background, LogoWrapper} from "../Login/styles";
import logo from "../../assets/logo.svg";
import {SignUpWrapper} from "./styles";
import SignUpForm from "../../components/SignUpForm";

const SignUp = () => {
  return (
    <Background>
      <SignUpWrapper>
        <SignUpForm />
      </SignUpWrapper>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
    </Background>
  );
};

export default SignUp;
