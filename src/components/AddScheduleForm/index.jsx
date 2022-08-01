import {useLocation, useNavigate, useParams} from "react-router-dom";
import {memo, useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  Background,
  ScheduleContent,
  ScheduleWrapper,
  SubMenu,
} from "../ScheduleView/styles";
import useInput from "../../hooks/useInput";
import TextEditor from "../TextEditor";
import {addNewSchedule} from "../../slices/projectSlice";
import {FormWrapper} from "./styles";

const changeEmptyString = (text) => {
  const dashString = text.replace(' ', '-');
  return dashString;
};

const AddScheduleForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const [title, onChangeTitle, setTitle] = useInput('');
  const [content, setContent] = useState('');
  const { projectList } = useSelector((state) => state.project);

  const testFilter = projectList.find((v) => v.projectName === 'mucfolio 개발');

  console.log(testFilter);

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

  return (
    <Background>
      <SubMenu>
        <button type="button" onClick={onClickAddSchedule}>스케줄 저장하기</button>
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
