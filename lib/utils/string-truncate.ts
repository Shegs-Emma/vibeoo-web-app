const stringTruncate = (stringToTruncate:string, stringLimit:number = 30) => {
  if (stringToTruncate.length > stringLimit) {
    return `${stringToTruncate.substring(0, stringLimit)}...`;
  }
  return stringToTruncate;
};

export default stringTruncate;
