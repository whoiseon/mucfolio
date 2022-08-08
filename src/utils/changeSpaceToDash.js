const changeSpaceToDash = (text) => {
  const dashString = text.replaceAll(' ', '-');
  return dashString;
};

export default changeSpaceToDash;
