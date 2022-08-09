import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useCallback, useState} from "react";
import {CheckWrapper, CtrlBtnWrapper, ItemWrapper, MemoContent} from "./styles";
import scheduleCheckImg from '../../assets/schedule_check_white.svg';
import scheduleCheckOkImg from '../../assets/schedule_check_ok.svg';

const MemoItem = () => {
  const [memoCheck, setMemoCheck] = useState(false);

  const onClickCheck = useCallback(() => {
    setMemoCheck((prev) => !prev);
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
        <p>React 강의 듣기</p>
        <p>11.09</p>
      </MemoContent>
      <CtrlBtnWrapper>
        <MoreHorizIcon />
      </CtrlBtnWrapper>
    </ItemWrapper>
  );
};

export default MemoItem;
