import {Link} from "react-router-dom";
import {memo} from "react";

const MenuItem = ({ name, link, icon }) => {
  return (
    <Link to={link}>
      {icon}
      {name}
    </Link>
  );
};

export default memo(MenuItem);
