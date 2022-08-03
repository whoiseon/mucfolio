import logo from "../../assets/logo.svg";
import {DefaultViewWrapper, LogoWrapper} from "./styles";

const DefaultView = () => {
  return (
    <DefaultViewWrapper>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
      <h1>나만의 프로젝트를 관리해보세요</h1>
    </DefaultViewWrapper>
  );
};

export default DefaultView;
