import LeftMenu from "../LeftMenu";
import {LayoutWrapper} from "./styles";

const AppLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <LeftMenu />
      { children }
    </LayoutWrapper>
  );
};

export default AppLayout;
