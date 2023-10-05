// Filter.js

import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectFilter } from "../../redux/filter/filterSlice";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.labelDiv}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        name="filterQuery"
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
