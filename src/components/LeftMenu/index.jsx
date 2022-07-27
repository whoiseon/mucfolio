import {useLocation, useNavigate} from "react-router-dom";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ArticleIcon from '@mui/icons-material/Article';
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {MenuButton, MenuList, MenuWrapper} from "./styles";
import MenuItem from "../MenuItem";
import {userLogout} from "../../slices/userSlice";

const LeftMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));

  const onClickLogout = useCallback(async () => {
    await dispatch(userLogout());
    await navigate('/');
  }, [dispatch]);

  return (
    <MenuWrapper>
      <MenuButton type="button">
        { userInfo.displayName } 님의 스케줄
        <MoreHorizIcon />
      </MenuButton>
      <MenuList>
        <MenuItem name="프로젝트" link="/project" icon={<ArticleIcon />} />
        <MenuItem name="빠른 메모" link="/memo" icon={<AssignmentTurnedInIcon />} />
        <button type="button" onClick={onClickLogout}>로그아웃</button>
      </MenuList>
    </MenuWrapper>
  );
};

export default LeftMenu;
