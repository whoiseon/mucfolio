import {Routes, Route, Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {loadToMyInfo} from "./slices/userSlice";
import Workspace from "./pages/Workspace";
import Project from "./pages/Project";
import Memo from "./pages/Memo";
import ScheduleView from "./components/ScheduleView";
import AddScheduleForm from "./components/AddScheduleForm";

const App = () => {
  const dispatch = useDispatch();
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
        <Route path="/project" element={<Project />}>
          <Route path=":project/new-schedule" element={<AddScheduleForm />} />
          <Route path=":project/:schedule/update" element={<AddScheduleForm />} />
          <Route path=":project/:schedule" element={<ScheduleView />} />
        </Route>
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </div>
  );
};

export default App;
