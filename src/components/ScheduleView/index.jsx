import {memo} from "react";
import scheduleCheckImg from '../../assets/schedule_check.svg';
import scheduleCheckOkImg from '../../assets/schedule_check_ok.svg';
import {Background, CommentWrapper, ScheduleCheck, ScheduleContent, ScheduleWrapper, SubMenu} from "./styles";
import Comment from "../Comment";
import AddCommentForm from "../AddCommentForm";

const ProjectView = () => {
  return (
    <Background>
      <SubMenu>
        서브메뉴
      </SubMenu>
      <ScheduleWrapper>
        <h1>Node.js Express로 서버 만들기</h1>
        <p>2022.7.30</p>
        <ScheduleContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </ScheduleContent>
        <ScheduleCheck>
          <button type="button">
            <img src={scheduleCheckOkImg} alt="scheduleCheckOkImg" />
            스케줄 완료하기
          </button>
        </ScheduleCheck>
        <AddCommentForm />
        <CommentWrapper>
          <Comment />
        </CommentWrapper>
      </ScheduleWrapper>
    </Background>
  );
};

export default memo(ProjectView);
