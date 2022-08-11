import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useCallback, useState} from "react";
import {CheckWrapper, CtrlBtnWrapper, ItemWrapper, MemoContent} from "./styles";
import scheduleCheckImg from '../../assets/schedule_check_white.svg';
import scheduleCheckOkImg from '../../assets/schedule_check_ok.svg';
import MemoCtrlModal from "../MemoCtrlModal";

const MemoItem = ({ memoData }) => {
  const [memoCheck, setMemoCheck] = useState(false);
  const [showCtrlModal, setShowCtrlModal] = useState(false);

  const onClickCheck = useCallback(() => {
    setMemoCheck((prev) => !prev);
  }, []);

  const onClickShowCtrlModal = useCallback(() => {
    setShowCtrlModal((prev) => !prev);
  }, []);

  return (
    <ItemWrapper>
      <CheckWrapper onClick={onClickCheck} status={memoCheck}>
        {
          memoCheck
            ? <img src={scheduleCheckOkImg} alt="scheduleCheckOkImg" />
            : <img src={scheduleCheckImg} alt="scheduleCheckImg" />

        }
      </CheckWrapper>
      <MemoContent status={memoCheck}>
        <p>{ memoData.content }</p>
        <p>{ memoData.createdAt }</p>
      </MemoContent>
      <CtrlBtnWrapper onClick={onClickShowCtrlModal}>
        <MoreHorizIcon />
      </CtrlBtnWrapper>
      { showCtrlModal && <MemoCtrlModal setShowCtrlModal={setShowCtrlModal} /> }
    </ItemWrapper>
  );
};

export default MemoItem;
