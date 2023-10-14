import React, { useEffect, useState } from "react";
import ExpensesFilter from "./components/ExpensesFilter";
import ExpensesList from "./components/ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  // const [filteredYear, setFilteredYear] = useState("2020");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...props.items]);
  }, [props.items]);

  const filterChangeHandler = (selectedYear) => {
    // setFilteredYear(selectedYear);

    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });

    setItems([...filteredExpenses]);
  };

  return (
    <div>
      <ExpensesFilter
        // selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={items} />
      <ExpensesList items={items} />
    </div>
  );
}

export default Expenses;
