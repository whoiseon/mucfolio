import AppLayout from "../../components/AppLayout";
import {Background, MemoWrapper} from "./styles";
import MemoItem from "../../components/MemoItem";

const Memo = () => {
  return (
    <AppLayout>
      <Background>
        <MemoWrapper>
          <h1>빠른 메모</h1>
          <MemoItem />
        </MemoWrapper>
      </Background>
    </AppLayout>
  );
};

export default Memo;
