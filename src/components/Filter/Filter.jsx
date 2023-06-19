import PropTypes from 'prop-types';
import './Filter.module.css';

export function Filter({ value, changeFilterInput }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={changeFilterInput} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};