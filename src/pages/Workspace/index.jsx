import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, Link} from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AppLayout from "../../components/AppLayout";
import {DashboardWrapper, Background, Dashboard, MyProject, MyMemo} from "./styles";
import {getUserProject} from "../../slices/projectSlice";
import ProjectLoading from "../../components/ProjectLoading";
import changeSpaceToDash from "../../utils/changeSpaceToDash";
import {getUserMemo} from "../../slices/memoSlice";

const Workspace = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const { projectList, userProjectLoading } = useSelector((state) => state.project);
  const { memoList, getUserMemosLoading } = useSelector((state) => state.memo);

  useEffect(() => {
    dispatch(getUserProject({
      uid: userInfo.uid,
    }));
    dispatch(getUserMemo({
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
                    ? <ProjectLoading content="프로젝트" />
                    : (
                      projectList?.length <= 0
                        ? (
                          <Link to="/project">
                            <ArticleIcon />
                            새 프로젝트 만들러가기
                          </Link>
                        )
                        : (
                          projectList?.map((data, i) => {
                            return (
                              <Link to={`/project/${changeSpaceToDash(data.projectName)}`} key={changeSpaceToDash(data.projectName)}>
                                <ArticleIcon />
                                { data.projectName }
                              </Link>
                            );
                          })
                        )
                    )
                }
              </div>
            </MyProject>
            <MyMemo>
              <div>
                <h2>메모</h2>
              </div>
              <div>
                {
                  getUserMemosLoading
                    ? <ProjectLoading content="메모" />
                    : (
                      memoList?.length <= 0
                        ? (
                          <Link to="/memo">
                            <AssignmentTurnedInIcon />
                            새 메모 작성하기
                          </Link>
                        )
                        : (
                          memoList?.map((data, i) => {
                            return (
                              <Link to="/memo" key={data.content}>
                                <AssignmentTurnedInIcon />
                                { data.content }
                              </Link>
                            );
                          })
                        )
                    )
                }
              </div>
            </MyMemo>
          </Dashboard>
        </DashboardWrapper>
      </Background>
    </AppLayout>
  );
};

export default Workspace;
