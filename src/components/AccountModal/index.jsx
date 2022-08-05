import {memo, useCallback} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AccountMenu, AccountMenuButton, Background, CloseArea, MyEmail, MyProfile} from "./styles";
import {ProfileImage} from "../../styles/common";
import {userLogout} from "../../slices/userSlice";

const AccountModal = ({ setAccountModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));

  const onCloseModal = useCallback((e) => {
    if (e.target === e.currentTarget) setAccountModal(false);
  }, []);

  const onClickLogout = useCallback(async () => {
    await navigate('/');
    await dispatch(userLogout());
  }, [dispatch, navigate]);

  return (
    <CloseArea onClick={onCloseModal}>
      <Background onClick={onCloseModal}>
        <MyEmail>
          {userInfo?.email}
        </MyEmail>
        <MyProfile>
          <ProfileImage>
            {userInfo?.displayName[0]}
          </ProfileImage>
          <span>{userInfo?.displayName} 님의 스케줄</span>
        </MyProfile>
        <AccountMenu>
          <AccountMenuButton type="button" onClick={onClickLogout}>
            로그아웃
          </AccountMenuButton>
        </AccountMenu>
      </Background>
    </CloseArea>
  );
};

export default memo(AccountModal);
