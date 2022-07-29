import {memo, useCallback} from "react";
import {useDispatch} from "react-redux";
import {Background, CloseArea} from "./styles";
import useInput from "../../hooks/useInput";
import {addNewProject} from "../../slices/projectSlice";

const AddProjectForm = ({ setShowAddProjectModal }) => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const [projectName, onChangeProjectName, setProjectName] = useInput('');

  const onSubmitAddProject = useCallback(async (e) => {
    e.preventDefault();
    await dispatch(addNewProject({
      uid: userInfo.uid,
      projectName,
    }));
    await setShowAddProjectModal(false);
  }, [dispatch, userInfo.uid, projectName]);

  const onCloseModal = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setShowAddProjectModal(false);
    }
  }, []);

  return (
    <CloseArea onClick={onCloseModal}>
      <Background>
        <h1>새 프로젝트</h1>
        <form onSubmit={onSubmitAddProject}>
          <input type="text" value={projectName} onChange={onChangeProjectName} />
        </form>
      </Background>
    </CloseArea>
  );
};

export default memo(AddProjectForm);
