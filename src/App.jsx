import {Routes, Route, Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {loadToMyInfo} from "./slices/userSlice";
import Workspace from "./pages/Workspace";
import Project from "./pages/Project";
import Memo from "./pages/Memo";
import ProjectView from "./components/ScheduleView";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

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
        <Route path="/project" element={<Project />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </div>
  );
};

export default App;
