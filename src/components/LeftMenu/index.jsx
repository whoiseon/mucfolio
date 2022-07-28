import {useLocation, useNavigate} from "react-router-dom";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ArticleIcon from '@mui/icons-material/Article';
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {MenuButton, MenuList, MenuWrapper} from "./styles";
import MenuItem from "../MenuItem";
import {userLogout} from "../../slices/userSlice";
import AccountModal from "../AccountModal";

const LeftMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));

  const [accountModal, setAccountModal] = useState(false);

  const showAccountModal = useCallback((e) => {
    setAccountModal((prev) => !prev);
  }, []);

  return (
    <MenuWrapper>
      <MenuButton type="button" onClick={showAccountModal}>
        { userInfo?.displayName } 님의 스케줄
        <MoreHorizIcon />
      </MenuButton>
      <MenuList isLocation={location.pathname}>
        <MenuItem name="프로젝트" link="/project" icon={<ArticleIcon />} />
        <MenuItem name="빠른 메모" link="/memo" icon={<AssignmentTurnedInIcon />} />
      </MenuList>
      {
        accountModal && <AccountModal setAccountModal={setAccountModal} />
      }
    </MenuWrapper>
  );
};

export default LeftMenu;
