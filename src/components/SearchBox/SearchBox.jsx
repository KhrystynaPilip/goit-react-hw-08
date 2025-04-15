import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filters/selectors";
import { useId } from "react";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const id = useId();
  const handleFilterChange = (filter) => dispatch(setNameFilter(filter));

  return (
    <div className={css.container}>
      <label htmlFor={id} className={css.label}>
        Find contacts by number
      </label>
      <input
        id={id}
        className={css.input}
        type="text"
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  );
}
