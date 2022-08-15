import {memo, useCallback, useEffect, useState} from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import BackspaceIcon from '@mui/icons-material/Backspace';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import swal from "sweetalert";
import scheduleCheckImg from '../../assets/schedule_check.svg';
import scheduleCheckOkImg from '../../assets/schedule_check_ok.svg';
import {ProjectButton, ProjectCtrlBtn} from "../../pages/Project/styles";
import {ItemWrapper, ProjectDetail, ScheduleButton} from "./styles";
import {deleteProject} from "../../slices/projectSlice";
import changeSpaceToDash from "../../utils/changeSpaceToDash";
import changeDashToSpace from "../../utils/changeDashToSpace";

const ProjectItem = ({ projectData }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const { projectList } = useSelector((state) => state.project);

  const [projectOpen, setProjectOpen] = useState(false);
  const [showCtrlBtn, setShowCtrlBtn] = useState(false);

  const onClickDeleteProject = useCallback(() => {
    swal({
      title: "정말 삭제하시겠습니까?",
      text: "삭제한 프로젝트와 스케줄은 복구할 수 없습니다!",
      icon: "warning",
      buttons: ["취소", "삭제"],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteProject({
            uid: userInfo.uid,
            projectName: projectData.projectName,
          }));
        } else {
          return false;
        }
      });
  }, [dispatch, userInfo.uid, projectData.projectName]);

  const showProject = useCallback((e) => {
    // console.log(e.target, e.currentTarget);
    // if (e.target === e.currentTarget) {
    //   setProjectOpen((prev) => !prev);
    // }
    if (!(e.target.nodeName === 'svg' || e.target.nodeName === 'path')) {
      setProjectOpen((prev) => !prev);
    }
  }, []);

  const onMouseShowIcon = useCallback(() => {
    setShowCtrlBtn(true);
  }, []);

  const onMouseHideIcon = useCallback(() => {
    setShowCtrlBtn(false);
  }, []);

  const testFind = projectList.find((v) => v.schedule.title === projectData.title);
  const findTitle = testFind.schedule.find((v) => v.title === 'a오날짜별로나오네');

  return (
    <ItemWrapper>
      <ProjectButton
        onClick={showProject}
        onMouseEnter={onMouseShowIcon}
        onMouseLeave={onMouseHideIcon}
      >
        <span>{projectData.projectName}</span>
        {
          showCtrlBtn
            ? (
              <ProjectCtrlBtn onClick={onClickDeleteProject}>
                <BackspaceIcon />
              </ProjectCtrlBtn>
            )
            : (
              projectOpen
                ? <ExpandLessIcon />
                : <ExpandMoreIcon />
            )
        }
      </ProjectButton>
      {
        projectOpen && (
          <ProjectDetail>
            {
              projectData?.schedule.map((schedule, i) => {
                return (
                  <Link to={`/project/${changeSpaceToDash(projectData?.projectName)}/${changeSpaceToDash(schedule.title)}`} key={schedule.title}>
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
            <Link to={`${changeSpaceToDash(projectData.projectName)}/new-schedule`}>
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
