export const hasErrors = (res) =>
  res.error && res.error.violations && res.error.violations['search.query'];

export const getErrorMessage = (violations) => {
  const errorMessages = [];
  switch (violations) {
    case 'search.query': {
      errorMessages.push('Size must be between 3 and 120');
      break;
    }
    default:
      return errorMessages.push('There was an error, please try again.');
  }

  return errorMessages;
};
