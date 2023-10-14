import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className=" p-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6  p-2">
            <div className="card p-2">
              <label className="expenses-list__fallback form-label btn btn-primary d-inline p-2 text-bg-primary">
                Title
              </label>
              <input
                className="form-control d-inline p-2 text-bg-dark"
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 p-2">
            <div className="card p-2">
              <label className="expenses-list__fallback form-label d-block p-2 text-bg-primary btn btn-primary">
                Amount
              </label>
              <input
                className="form-control d-inline p-2 text-bg-dark"
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12  p-2 mb-5">
            <div className="card p-2">
              <label className="expenses-list__fallback d-inline p-2 mb-2 text-bg-primary btn btn-primary">
                Date
              </label>
              <input
                className="form-control d-block p-2 text-bg-dark"
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12   p-5">
            <div className="card p-2">
              <button type="submit" className="btn btn-primary ">
                Add Expense
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
