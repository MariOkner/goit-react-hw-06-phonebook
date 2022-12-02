import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { selectFilter } from 'redux/filterSlice';

import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = filter => dispatch(selectFilter(filter));

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={handleFilterChange}
      ></FilterInput>
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
