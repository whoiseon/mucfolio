import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {CheckWrapper, CtrlBtnWrapper, ItemWrapper, MemoContent} from "./styles";
import scheduleCheckImg from '../../assets/schedule_check_white.svg';
import scheduleCheckOkImg from '../../assets/schedule_check_ok.svg';
import MemoCtrlModal from "../MemoCtrlModal";
import {memoCheck} from "../../slices/memoSlice";

const MemoItem = ({ memoData }) => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('connect_user'));
  const [checked, setChecked] = useState(false);
  const [showCtrlModal, setShowCtrlModal] = useState(false);

  useEffect(() => {
    setChecked(memoData.status);
  }, [memoData.status]);

  const onClickCheck = useCallback(async () => {
    await setChecked((prev) => !prev);
    await dispatch(memoCheck({
      uid: userInfo.uid,
      memo: memoData.content,
      checked,
    }));
  }, [dispatch, memoData.content, checked]);

  const onClickShowCtrlModal = useCallback(() => {
    setShowCtrlModal((prev) => !prev);
  }, []);

  return (
    <ItemWrapper>
      <CheckWrapper onClick={onClickCheck} status={checked}>
        {
          checked
            ? <img src={scheduleCheckOkImg} alt="scheduleCheckOkImg" />
            : <img src={scheduleCheckImg} alt="scheduleCheckImg" />

        }
      </CheckWrapper>
      <MemoContent status={checked}>
        <p>{ memoData.content }</p>
        <p>{ memoData.createdAt }</p>
      </MemoContent>
      <CtrlBtnWrapper onClick={onClickShowCtrlModal}>
        <MoreHorizIcon />
      </CtrlBtnWrapper>
      {
        showCtrlModal && (
          <MemoCtrlModal setShowCtrlModal={setShowCtrlModal} memo={memoData.content} />
        )
      }
    </ItemWrapper>
  );
};

export default MemoItem;
