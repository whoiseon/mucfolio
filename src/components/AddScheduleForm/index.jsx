import {useLocation, useNavigate, useParams} from "react-router-dom";
import {memo, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {convertToRaw, EditorState, convertFromHTML, ContentState} from "draft-js";
import swal from 'sweetalert';
import {
  Background, CtrlButton, CtrlButtonWrapper,
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
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const { projectList, scheduleView } = useSelector((state) => state.project);

  useEffect(() => {
    if (location.pathname.includes('/update')) {
      dispatch(getUserSchedule({
        uid: userInfo.uid,
        projectName: params.project,
        scheduleName: params.schedule,
      }));
      setTitle(scheduleView?.title);
      setEditorState(() => EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(scheduleView?.content),
        ),
      ));
    }
  }, [userInfo.uid, params.project, editorState, params.scheduleName]);

  const onClickAddSchedule = useCallback(async () => {
    if (!title) return swal("업로드 에러", "제목을 입력해주세요", "error");
    if (!content || content.length < 10) return swal("업로드 에러", "내용은 10자 이상 입력해주세요", "error");

    await dispatch(addNewSchedule({
      uid: userInfo.uid,
      projectName: params.project,
      title,
      content,
    }));
    await navigate(`${params.project}/${changeEmptyString(title)}`);
  }, [dispatch, userInfo.uid, params.project, title, content]);

  const onClickUpdateSchedule = useCallback(async () => {
    if (!title) return swal("업로드 에러", "제목을 입력해주세요", "error");
    if (!content || content === '<p></p>') return swal("업로드 에러", "내용은 10자 이상 입력해주세요", "error");

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
        <CtrlButtonWrapper>
          {
            location.pathname.includes('/update')
              ? <CtrlButton type="button" onClick={onClickUpdateSchedule}>스케줄 수정하기</CtrlButton>
              : <CtrlButton type="button" onClick={onClickAddSchedule}>스케줄 저장하기</CtrlButton>
          }
        </CtrlButtonWrapper>
      </SubMenu>
      <ScheduleWrapper>
        <FormWrapper>
          <input
            type="text"
            value={title || ''}
            onChange={onChangeTitle}
            placeholder="할 일을 입력해주세요..."
          />
          <TextEditor
            editorState={editorState}
            setEditorState={setEditorState}
            content={content}
            setContent={setContent}
          />
        </FormWrapper>
      </ScheduleWrapper>
    </Background>
  );
};

export default memo(AddScheduleForm);
