import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import {ProjectList, ProjectWrapper} from "./styles";
import ProjectView from "../../components/ProjectView";
import ProjectItem from "../../components/ProjectItem";
import {getUserProject} from "../../slices/projectSlice";

const Project = ({ children }) => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const { projectList } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getUserProject({
      uid: userInfo.uid,
    }));
  }, [dispatch]);

  return (
    <AppLayout>
      <ProjectWrapper>
        <ProjectList>
          {
            projectList?.map((data, i) => {
              return <ProjectItem key={data.projectName} projectData={data} />;
            })
          }
        </ProjectList>
        <ProjectView />
      </ProjectWrapper>
    </AppLayout>
  );
};

export default Project;
