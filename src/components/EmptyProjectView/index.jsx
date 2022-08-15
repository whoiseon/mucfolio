import {Background, EmptyProjectWrapper} from "./styles";

const EmptyProjectView = ({ onShowAddProjectModal, content }) => {
  return (
    <Background>
      <EmptyProjectWrapper>
        <h1>새로운 {content}를<br /> 만들어보세요!</h1>
        <button type="button" onClick={onShowAddProjectModal}>{content} 만들기</button>
      </EmptyProjectWrapper>
    </Background>
  );
};

export default EmptyProjectView;
