import AppLayout from "../../components/AppLayout";
import {Background, MemoHeader, MemoList, MemoWrapper} from "./styles";
import MemoItem from "../../components/MemoItem";

const Memo = () => {
  return (
    <AppLayout>
      <Background>
        <MemoWrapper>
          <MemoHeader>
            <h1>빠른 메모</h1>
            <button type="button">+ 새로운 메모</button>
          </MemoHeader>
          <MemoList>
            <MemoItem />
            <MemoItem />
            <MemoItem />
          </MemoList>
        </MemoWrapper>
      </Background>
    </AppLayout>
  );
};

export default Memo;
