import {memo, useCallback} from "react";
import {CommentForm} from "./styles";
import useInput from "../../hooks/useInput";

const AddCommentForm = () => {
  const [comment, onChangeComment, setComment] = useInput('');

  const onSubmitComment = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <CommentForm onSubmit={onSubmitComment}>
      <input
        type="text"
        value={comment}
        onChange={onChangeComment}
        placeholder="내 스케줄에 코멘트를 추가해보세요."
      />
    </CommentForm>
  );
};

export default memo(AddCommentForm);
