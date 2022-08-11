import {useState, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AppLayout from "../../components/AppLayout";
import {Background, MemoHeader, MemoList, MemoWrapper} from "./styles";
import MemoItem from "../../components/MemoItem";
import AddMemoForm from "../../components/AddMemoForm";
import {getUserMemo} from "../../slices/memoSlice";

const Memo = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const { memoList } = useSelector((state) => state.memo);
  const [showAddMemoModal, setShowAddMemoModal] = useState(false);

  useEffect(() => {
    dispatch(getUserMemo({
      uid: userInfo.uid,
    }));
  }, [dispatch, userInfo.uid]);

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
            {
              memoList?.map((memo, i) => {
                return <MemoItem key={memo.content} memoData={memo} />;
              })
            }
          </MemoList>
        </MemoWrapper>
      </Background>
      { showAddMemoModal && <AddMemoForm setShowAddMemoModal={setShowAddMemoModal} /> }
    </AppLayout>
  );
};

export default Memo;
