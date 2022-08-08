import {Background, EmptyProjectWrapper} from "./styles";

const EmptyProjectView = ({ onShowAddProjectModal }) => {
  return (
    <Background>
      <EmptyProjectWrapper>
        <h1>새로운 프로젝트를<br /> 만들어보세요!</h1>
        <button type="button" onClick={onShowAddProjectModal}>프로젝트 만들기</button>
      </EmptyProjectWrapper>
    </Background>
  );
};

export default EmptyProjectView;
