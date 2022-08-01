import {memo, useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import scheduleCheckOkImg from '../../assets/schedule_check_ok.svg';
import scheduleCheckOkBackgroundImg from '../../assets/schedule_check_ok_background.svg';
import {Background, CommentWrapper, ScheduleCheck, ScheduleContent, ScheduleWrapper, SubMenu} from "./styles";
import Comment from "../Comment";
import AddCommentForm from "../AddCommentForm";
import {getUserSchedule, scheduleCheck} from "../../slices/projectSlice";
import DefaultView from "../DefaultView";

const ProjectView = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const { scheduleView } = useSelector((state) => state.project);
  const [checked, setChecked] = useState(false);

  const onClickScheduleCheck = useCallback(() => {
    dispatch(scheduleCheck({
      uid: userInfo.uid,
      projectName: params.project,
      scheduleName: params.schedule,
      checked,
    }));
    setChecked((prev) => !prev);
  }, [dispatch, checked, setChecked, userInfo.uid, params.project, params.schedule]);

  useEffect(() => {
    dispatch(getUserSchedule({
      uid: userInfo.uid,
      projectName: params.project,
      scheduleName: params.schedule,
    }));
  }, [dispatch, userInfo.uid, params.project, params.schedule, onClickScheduleCheck]);

  if (scheduleView === undefined) {
    return <DefaultView />;
  }

  return (
    <Background>
      <SubMenu>
        서브메뉴
      </SubMenu>
      <ScheduleWrapper>
        <h1>{ scheduleView?.title }</h1>
        <p>{ scheduleView?.createdAt }</p>
        <ScheduleContent
          dangerouslySetInnerHTML={{__html: scheduleView?.content}}
        />
        <ScheduleCheck status={scheduleView?.status}>
          <button type="button" onClick={onClickScheduleCheck}>
            {
              scheduleView?.status
                ? <img src={scheduleCheckOkBackgroundImg} alt="scheduleCheckOkBackgroundImg" />
                : <img src={scheduleCheckOkImg} alt="scheduleCheckOkImg" />
            }
            스케줄 완료하기
          </button>
        </ScheduleCheck>
        <AddCommentForm />
        <CommentWrapper>
          <Comment />
        </CommentWrapper>
      </ScheduleWrapper>
    </Background>
  );
};

export default memo(ProjectView);
