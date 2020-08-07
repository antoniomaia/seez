export const hasErrors = response =>
  response.error && response.violations && response.violations['search.query'];

export const getErrorMessage = violations => {
  const errorMessages = [];

  Object.keys(violations).forEach(errorKey => {
    switch (errorKey) {
      case 'search.query': {
        errorMessages.push('Size must be between 3 and 120');
        break;
      }
      default:
        errorMessages.push('There was an error, please try again.');
    }
  });

  return errorMessages;
};
