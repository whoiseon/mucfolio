import {useLocation, useNavigate, useParams} from "react-router-dom";
import {memo, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  Background,
  ScheduleContent,
  ScheduleWrapper,
  SubMenu,
} from "../ScheduleView/styles";
import useInput from "../../hooks/useInput";
import TextEditor from "../TextEditor";
import {addNewSchedule, getUserSchedule, updateSchedule} from "../../slices/projectSlice";
import {FormWrapper} from "./styles";

const changeEmptyString = (text) => {
  const dashString = text.replace(' ', '-');
  return dashString;
};

const AddScheduleForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const [title, onChangeTitle, setTitle] = useInput('');
  const [content, setContent] = useState('');
  const { projectList, scheduleView } = useSelector((state) => state.project);

  useEffect(() => {
    if (location.pathname.includes('/update')) {
      dispatch(getUserSchedule({
        uid: userInfo.uid,
        projectName: params.project,
        scheduleName: params.schedule,
      }));
      setTitle(scheduleView?.title);
      setContent(scheduleView?.content);
    }
  }, [userInfo.uid, params.project, params.scheduleName]);

  const onChangeContent = useCallback((value) => {
    setContent(value);
  }, []);

  const onClickAddSchedule = useCallback(async () => {
    await dispatch(addNewSchedule({
      uid: userInfo.uid,
      projectName: params.project,
      title,
      content,
    }));
    await navigate(`${params.project}/${changeEmptyString(title)}`);
  }, [dispatch, userInfo.uid, params.project, title, content]);

  const onClickUpdateSchedule = useCallback(async () => {
    await dispatch(updateSchedule({
      uid: userInfo.uid,
      projectName: params.project,
      title,
      content,
    }));
    await navigate(`${params.project}/${changeEmptyString(title)}`);
  }, [dispatch, userInfo.uid, params.project, title, content]);

  return (
    <Background>
      <SubMenu>
        {
          location.pathname.includes('/update')
            ? <button type="button" onClick={onClickUpdateSchedule}>스케줄 수정하기</button>
            : <button type="button" onClick={onClickAddSchedule}>스케줄 저장하기</button>
        }
      </SubMenu>
      <ScheduleWrapper>
        <FormWrapper>
          <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="할 일을 입력해주세요..."
          />
          <TextEditor value={content} onChange={onChangeContent} />
        </FormWrapper>
      </ScheduleWrapper>
    </Background>
  );
};

export default memo(AddScheduleForm);
