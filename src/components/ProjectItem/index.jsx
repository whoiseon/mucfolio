import {memo, useCallback, useEffect, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import scheduleCheckImg from '../../assets/schedule_check.svg';
import scheduleCheckOkImg from '../../assets/schedule_check_ok.svg';
import {ProjectButton} from "../../pages/Project/styles";
import {ItemWrapper, ProjectDetail, ScheduleButton} from "./styles";

const changeEmptyString = (text) => {
  const dashString = text.replace(' ', '-');
  return dashString;
};

const changeDashString = (text) => {
  const emptyString = text.replace('-', ' ');
  return emptyString;
};

const ProjectItem = ({ projectData }) => {
  const params = useParams();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const [projectOpen, setProjectOpen] = useState(false);

  // useEffect(() => {
  //   if (projectData.projectName === changeDashString(params.project)) {
  //     setProjectOpen(true);
  //   }
  // }, [params.project]);

  const showProject = useCallback(() => {
    setProjectOpen((prev) => !prev);
  }, []);

  return (
    <ItemWrapper>
      <ProjectButton onClick={showProject}>
        <span>{projectData.projectName}</span>
        {
          projectOpen
            ? <ExpandLessIcon />
            : <ExpandMoreIcon />
        }
      </ProjectButton>
      {
        projectOpen && (
          <ProjectDetail>
            {
              projectData?.schedule.map((schedule, i) => {
                return (
                  <Link to={`/project/${changeEmptyString(projectData?.projectName)}/${changeEmptyString(schedule.title)}`} key={schedule.title}>
                    <ScheduleButton status={schedule.status}>
                      {
                        schedule.status
                          ? <img src={scheduleCheckOkImg} alt="scheduleCheckOkImg" />
                          : <img src={scheduleCheckImg} alt="scheduleCheckImg" />
                      }
                      <span>
                        {schedule.title}
                      </span>
                      <p>
                        {
                          schedule.status
                            ? '완료'
                            : (
                              schedule.createdAt
                            )
                        }
                      </p>
                    </ScheduleButton>
                  </Link>
                );
              })
            }
            <Link to={`${changeEmptyString(projectData.projectName)}/new-schedule`}>
              <ScheduleButton>
                + 스케줄 추가
              </ScheduleButton>
            </Link>
          </ProjectDetail>
        )
      }
    </ItemWrapper>
  );
};

export default memo(ProjectItem);
