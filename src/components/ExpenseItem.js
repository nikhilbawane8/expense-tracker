import React from "react";

import "./ExpenseItem.css";
import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <li>
      <div className="container p-2 ">
        <div className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="   expense-item__description">
            <h2 className="ms-3 badge border text-bg-primary">{props.title}</h2>
            <div className="expense-item__price me-3  border btn btn-primary">
              ${props.amount}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
export default ExpenseItem;
