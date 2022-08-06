import CircularProgress from "@mui/material/CircularProgress";
import {LoadingWrapper} from "./styles";

const ProjectLoading = () => {
  return (
    <LoadingWrapper>
      <CircularProgress color="inherit" />
      <p>프로젝트를 불러오는 중입니다</p>
    </LoadingWrapper>
  );
};

export default ProjectLoading;
