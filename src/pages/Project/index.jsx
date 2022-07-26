import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, Link} from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import {AddProjectButton, List, ProjectList, ProjectWrapper} from "./styles";
import ScheduleView from "../../components/ScheduleView";
import ProjectItem from "../../components/ProjectItem";
import {getUserProject} from "../../slices/projectSlice";
import AddProjectForm from "../../components/AddProjectForm";
import AddScheduleForm from "../../components/AddScheduleForm";
import ProjectLoading from "../../components/ProjectLoading";
import EmptyProjectView from "../../components/EmptyProjectView";

const Project = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const { projectList, userProjectLoading, scheduleView } = useSelector((state) => state.project);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  useEffect(() => {
    dispatch(getUserProject({
      uid: userInfo.uid,
    }));
  }, [dispatch]);

  const onShowAddProjectModal = useCallback(() => {
    setShowAddProjectModal(true);
  }, []);

  return (
    <AppLayout>
      <ProjectWrapper>
        <ProjectList>
          {
            userProjectLoading
              ? <ProjectLoading content="프로젝트" />
              : (
                <>
                  <List>
                    {
                      projectList <= 0
                        ? <EmptyProjectView content="프로젝트" onShowAddProjectModal={onShowAddProjectModal} />
                        : projectList?.map((data, i) => {
                          return <ProjectItem projectData={data} key={data.projectName} />;
                        })
                    }
                  </List>
                  {
                    projectList <= 0
                      ? null
                      : (
                        <AddProjectButton onClick={onShowAddProjectModal}>
                          + 새 프로젝트
                        </AddProjectButton>
                      )
                  }
                </>
              )
          }
        </ProjectList>
        {
          location.pathname.includes('/new-schedule') || location.pathname.includes('/update')
            ? <AddScheduleForm />
            : <ScheduleView />
        }
      </ProjectWrapper>
      { showAddProjectModal && <AddProjectForm setShowAddProjectModal={setShowAddProjectModal} /> }
    </AppLayout>
  );
};

export default Project;
