import {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Background, ModalWrapper} from "./styles";
import {deleteMemo} from "../../slices/memoSlice";

const MemoCtrlModal = ({ setShowCtrlModal, memo }) => {
  const dispatch = useDispatch();
  const ModalRef = useRef();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const { memoList } = useSelector((state) => state.memo);

  const onClickDeleteMemo = useCallback(async () => {
    await dispatch(deleteMemo({
      uid: userInfo.uid,
      memo,
    }));
    await setShowCtrlModal(false);
  }, [userInfo.uid, memo]);

  const onClickCloseModal = useCallback((e) => {
    if (ModalRef.current && !ModalRef.current.contains(e.target)) {
      setShowCtrlModal(false);
    } else {
      setShowCtrlModal(true);
    }
  }, [ModalRef]);

  useEffect(() => {
    document.addEventListener("mousedown", onClickCloseModal);
    return () => {
      document.removeEventListener("mousedown", onClickCloseModal);
    };
  });

  return (
    <Background onClick={onClickCloseModal} ref={ModalRef}>
      <ModalWrapper onClick={onClickDeleteMemo}>
        삭제하기
      </ModalWrapper>
    </Background>
  );
};

export default MemoCtrlModal;
