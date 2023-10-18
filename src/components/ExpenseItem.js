import React from "react";

import "./ExpenseItem.css";
import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <li>
      <div className="container p-2 justify-content-evenly ">
        <div className="expense-item ">
          <ExpenseDate date={props.date} />
          <div className="   expense-item__description">
            <h2 className=" expense-item__description_h2 badge border text-bg-primary">
              {props.title}
            </h2>
            <div className="expense-item__price  border btn btn-primary">
              ${props.amount}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
export default ExpenseItem;
