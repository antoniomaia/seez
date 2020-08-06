import PropTypes from 'prop-types';

const SearchInput = ({ searchTerm, handleChange }) => (
  <>
    <h1>Let`s find Chuck Norris facts</h1>
    <label htmlFor="search-input">
      <input
        type="text"
        id="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </label>
  </>
);

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchInput;
