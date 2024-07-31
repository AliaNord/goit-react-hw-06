import s from'./SearchBox.module.css'

const SearchBox = ({handleChangeInput, searchBoxValue}) => {
  return (
      <label className={s.label}>
        <span>Find contact by name</span>
        <input className={s.input}
          type="text"
          onChange={handleChangeInput}
          value={searchBoxValue}
        />
      </label>
  );
};

export default SearchBox