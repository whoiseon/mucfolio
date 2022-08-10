import {useState, useCallback} from "react";
import AppLayout from "../../components/AppLayout";
import {Background, MemoHeader, MemoList, MemoWrapper} from "./styles";
import MemoItem from "../../components/MemoItem";
import AddMemoForm from "../../components/AddMemoForm";

const Memo = () => {
  const [showAddMemoModal, setShowAddMemoModal] = useState(false);

  const onClickShowAddMemo = useCallback(() => {
    setShowAddMemoModal(true);
  }, []);

  return (
    <AppLayout>
      <Background>
        <MemoWrapper>
          <MemoHeader>
            <h1>빠른 메모</h1>
            <button type="button" onClick={onClickShowAddMemo}>+ 새로운 메모</button>
          </MemoHeader>
          <MemoList>
            <MemoItem />
            <MemoItem />
            <MemoItem />
          </MemoList>
        </MemoWrapper>
      </Background>
      { showAddMemoModal && <AddMemoForm setShowAddMemoModal={setShowAddMemoModal} /> }
    </AppLayout>
  );
};

export default Memo;
