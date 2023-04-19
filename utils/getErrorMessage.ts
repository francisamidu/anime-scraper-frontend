const getErrorMessage = (error: any) => {
  return error instanceof Error ? error.message : "Something went wrong";
};
export default getErrorMessage;
