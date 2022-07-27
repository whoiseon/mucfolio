import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {userLogout} from "../../slices/userSlice";
import AppLayout from "../../components/AppLayout";

const Workspace = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));

  return (
    <AppLayout>
      123
    </AppLayout>
  );
};

export default Workspace;
