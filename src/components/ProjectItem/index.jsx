import {memo, useCallback, useEffect, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useDispatch, useSelector} from "react-redux";
import scheduleCheckImg from '../../assets/schedule_check.svg';
import scheduleCheckOkImg from '../../assets/schedule_check_ok.svg';
import {ProjectButton} from "../../pages/Project/styles";
import {ItemWrapper, ProjectDetail, ScheduleButton} from "./styles";

const ProjectItem = ({ projectData }) => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const [projectOpen, setProjectClose] = useState(false);

  const showProject = useCallback(() => {
    setProjectClose((prev) => !prev);
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
              projectData.schedule.map((schedule, i) => {
                return (
                  <ScheduleButton key={schedule.title} status={schedule.status}>
                    {
                      schedule.status === '완료'
                        ? <img src={scheduleCheckOkImg} alt="scheduleCheckOkImg" />
                        : <img src={scheduleCheckImg} alt="scheduleCheckImg" />
                    }
                    <span>
                      {schedule.title}
                    </span>
                    <p>
                      {schedule.createdAt}
                    </p>
                  </ScheduleButton>
                );
              })
            }
            <ScheduleButton>
              + 스케줄 추가
            </ScheduleButton>
          </ProjectDetail>
        )
      }
    </ItemWrapper>
  );
};

export default memo(ProjectItem);
