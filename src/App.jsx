import {Routes, Route, Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {loadToMyInfo} from "./slices/userSlice";
import Workspace from "./pages/Workspace";
import {auth} from "./firebaseConfig";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        sessionStorage.setItem('connect_user', JSON.stringify(user));
      } else {
        sessionStorage.removeItem('connect_user');
      }
    });
  }, []);

  useEffect(() => {
    dispatch(loadToMyInfo());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            userInfo
              ? <Workspace />
              : <Login />
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
