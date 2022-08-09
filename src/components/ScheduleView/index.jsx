import {memo, useCallback, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Stack, Skeleton} from "@mui/material";
import swal from "sweetalert";
import {
  Background,
  CommentWrapper, CtrlButton, CtrlButtonWrapper,
  ScheduleCheck,
  ScheduleContent,
  ScheduleWrapper,
  SkeletonWrapper,
  SubMenu,
} from "./styles";
import {deleteProject, deleteSchedule, getUserProject, getUserSchedule, scheduleCheck} from "../../slices/projectSlice";
import DefaultView from "../DefaultView";

const ProjectView = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const { scheduleView, userScheduleLoading } = useSelector((state) => state.project);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(getUserSchedule({
      uid: userInfo.uid,
      projectName: params.project,
      scheduleName: params.schedule,
    }));
    setChecked(scheduleView?.status);
  }, [dispatch, userInfo.uid, params.project, params.schedule, scheduleView?.status]);

  const onClickScheduleCheck = useCallback(async () => {
    await setChecked((prev) => !prev);
    await dispatch(scheduleCheck({
      uid: userInfo.uid,
      projectName: params.project,
      scheduleName: params.schedule,
      checked,
    }));
  }, [dispatch, checked, userInfo.uid, params.project, params.schedule]);

  const onClickDeleteSchedule = useCallback(() => {
    swal({
      title: "정말 삭제하시겠습니까?",
      text: "삭제한 프로젝트와 스케줄은 복구할 수 없습니다!",
      icon: "warning",
      buttons: ["취소", "삭제"],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteSchedule({
            uid: userInfo.uid,
            projectName: params.project,
            scheduleName: params.schedule,
          }));
          navigate('/project');
          dispatch(getUserProject({
            uid: userInfo.uid,
          }));
        } else {
          return false;
        }
      });
  }, [dispatch, userInfo.uid, params.project, params.schedule, navigate]);

  if (scheduleView === undefined) {
    return <DefaultView />;
  }

  return (
    <Background>
      <SubMenu>
        <ScheduleCheck status={checked}>
          <button type="button" onClick={onClickScheduleCheck}>
            {
              checked
                ? '스케줄 취소'
                : '스케줄 완료'
            }
          </button>
        </ScheduleCheck>
        <CtrlButtonWrapper>
          <Link to={`/project/${params.project}/${params.schedule}/update`}>
            <CtrlButton>
              수정
            </CtrlButton>
          </Link>
          <CtrlButton onClick={onClickDeleteSchedule}>삭제</CtrlButton>
        </CtrlButtonWrapper>
      </SubMenu>
      <ScheduleWrapper>
        {
          userScheduleLoading
            ? (
              <SkeletonWrapper>
                <Stack>
                  <h1>
                    <Skeleton variant="text" width={240} height={50} />
                  </h1>
                  <p>
                    <Skeleton variant="text" width={100} />
                  </p>
                  <p>
                    <Skeleton variant="rectangular" width="100%" height={200} />
                  </p>
                </Stack>
              </SkeletonWrapper>
            )
            : (
              <>
                <h1>{ scheduleView?.title }</h1>
                <p>{ scheduleView?.createdAt }</p>
                <ScheduleContent
                  dangerouslySetInnerHTML={{__html: scheduleView?.content}}
                />
              </>
            )
        }
      </ScheduleWrapper>
    </Background>
  );
};

export default memo(ProjectView);
