const changeDashToSpace = (text) => {
  const dashString = text.replaceAll('-', ' ');
  return dashString;
};

export default changeDashToSpace;
