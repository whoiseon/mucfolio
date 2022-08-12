import CircularProgress from "@mui/material/CircularProgress";
import {LoadingWrapper} from "./styles";

const ProjectLoading = ({ content }) => {
  return (
    <LoadingWrapper>
      <CircularProgress color="inherit" />
      <p>{content}를 불러오는 중입니다</p>
    </LoadingWrapper>
  );
};

export default ProjectLoading;
