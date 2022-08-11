import {memo, useCallback, useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {Background, CloseArea} from "../AddProjectForm/styles";
import useInput from "../../hooks/useInput";
import {addNewProject} from "../../slices/projectSlice";
import {addNewMemo} from "../../slices/memoSlice";

const AddMemoForm = ({ setShowAddMemoModal }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const [memoContent, onChangeMemoContent, setMemoContent] = useInput('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmitAddMemo = useCallback(async (e) => {
    e.preventDefault();
    await dispatch(addNewMemo({
      uid: userInfo.uid,
      memo: memoContent,
    }));
    await setShowAddMemoModal(false);
  }, [dispatch, userInfo.uid, memoContent]);

  const onCloseModal = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setShowAddMemoModal(false);
    }
  }, []);

  return (
    <CloseArea onClick={onCloseModal}>
      <Background>
        <h1>새 메모</h1>
        <form onSubmit={onSubmitAddMemo}>
          <input ref={inputRef} type="text" value={memoContent} onChange={onChangeMemoContent} />
        </form>
      </Background>
    </CloseArea>
  );
};

export default memo(AddMemoForm);
