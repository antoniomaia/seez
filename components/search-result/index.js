import PropTypes from 'prop-types';

const SearchResult = ({ result, total }) => {
  if (total === 0) {
    return <h4>nothing to show</h4>;
  }

  return (
    <ul>
      {result.map(({ id, value, icon_url: iconUrl }) => (
        <li key={id}>
          <img src={iconUrl} alt="Chuck Norris Avatar" />
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};

SearchResult.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired,
};

export default SearchResult;
