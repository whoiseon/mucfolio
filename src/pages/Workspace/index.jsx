import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {userLogout} from "../../slices/userSlice";

const Workspace = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));

  const onClickLogout = useCallback(async () => {
    await dispatch(userLogout());
    await navigate('/');
  }, [dispatch]);

  return (
    <div>
      {userInfo.displayName}
      <button type="button" onClick={onClickLogout}>로그아웃</button>
    </div>
  );
};

export default Workspace;
