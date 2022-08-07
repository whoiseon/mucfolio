import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, Link} from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import {Stack, Skeleton} from "@mui/material";
import {userLogout} from "../../slices/userSlice";
import AppLayout from "../../components/AppLayout";
import {DashboardWrapper, Background, Dashboard, MyProject, MyMemo} from "./styles";
import {getUserProject} from "../../slices/projectSlice";
import {SkeletonWrapper} from "../../components/ScheduleView/styles";
import ProjectLoading from "../../components/ProjectLoading";

const Workspace = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const { projectList, userProjectLoading } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getUserProject({
      uid: userInfo.uid,
    }));
  }, [dispatch, userInfo.uid]);

  return (
    <AppLayout>
      <Background>
        <DashboardWrapper>
          <h1>
            <span>{ userInfo.displayName }</span> 님의 먹폴리오
          </h1>
          <Dashboard>
            <MyProject>
              <div>
                <h2>프로젝트</h2>
              </div>
              <div>
                {
                  userProjectLoading
                    ? <ProjectLoading />
                    : projectList?.map((data, i) => {
                      return (
                        <Link to="/project">
                          <ArticleIcon />
                          { data.projectName }
                        </Link>
                      );
                    })
                }
              </div>
            </MyProject>
            <MyMemo>
              <div>
                <h2>메모</h2>
              </div>
              <div>
                메모 컴포넌트 작업중
              </div>
            </MyMemo>
          </Dashboard>
        </DashboardWrapper>
      </Background>
    </AppLayout>
  );
};

export default Workspace;
