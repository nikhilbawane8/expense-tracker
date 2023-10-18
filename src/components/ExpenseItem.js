import React from "react";

import "./ExpenseItem.css";
import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <li>
      <div className="container ">
        <div className="expense-item ">
          <ExpenseDate date={props.date} />
          <div className="ms-5 expense-item__description">
            <h2 className=" badge border text-bg-primary">{props.title}</h2>
            <div className="expense-item__price border btn btn-primary">
              ${props.amount}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
export default ExpenseItem;
