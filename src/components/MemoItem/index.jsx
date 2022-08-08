import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {ItemWrapper} from "./styles";
import scheduleCheckImg from '../../assets/schedule_check_white.svg';
import scheduleCheckOkImg from '../../assets/schedule_check_ok.svg';

const MemoItem = () => {
  return (
    <ItemWrapper>
      <img src={scheduleCheckImg} alt="scheduleCheckImg" />
      <div>
        <p>React 강의 듣기</p>
        <p>11.09</p>
      </div>
      <MoreHorizIcon />
    </ItemWrapper>
  );
};

export default MemoItem;
