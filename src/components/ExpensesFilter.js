import React from "react";

function ExpensesFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="pt-2 pb-2 mt-3 mb-3">
      <div className="d-flex justify-content-between">
        <label className="badge border ms-5 ">Filter by year</label>
        <select
          className="rounded-pill me-5"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="">ALL</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
