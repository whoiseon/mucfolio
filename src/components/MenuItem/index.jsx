import {Link, useLocation} from "react-router-dom";
import {memo} from "react";
import {ItemWrapper} from "./styles";

const MenuItem = ({ name, link, icon, location }) => {
  return (
    <ItemWrapper>
      <Link to={link}>
        {icon}
        {name}
      </Link>
    </ItemWrapper>
  );
};

export default memo(MenuItem);
