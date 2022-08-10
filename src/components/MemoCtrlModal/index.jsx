import {useCallback, useEffect, useRef} from "react";
import {Background, ModalWrapper} from "./styles";

const MemoCtrlModal = ({ setShowCtrlModal }) => {
  const ModalRef = useRef();

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
      <ModalWrapper>
        삭제하기
      </ModalWrapper>
    </Background>
  );
};

export default MemoCtrlModal;
