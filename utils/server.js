/**
 * This method only checks for one error violation and
 * further implementations should be done for other known errors.
 * @param response
 * @returns {true||false}
 */
export const hasErrors = response =>
  response.error && response.violations && response.violations['search.query'];

/**
 * Mapping known error codes to messages ready for users.
 * Returning general error message by default.
 * @param violations
 * @returns {[]}
 */
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
