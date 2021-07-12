import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const HandleTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleAmount = (e) => {
    setEnteredAmount(e.target.value);
  };

  const handleDate = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleSubmit = (e) => {
    //la funcion onSubmit hace refresh de la pagina por default
    //hay que desactivarlo asi:
    e.preventDefault();

    //creo un nuevo objeto para mandarlo a NewExpense
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate.replace(/-/g, "/").replace(/T.+/, "")),
    };
    props.handleCallback(expenseData);
    //para limpiar los inputs despues del submit
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    //para cerrar el formulario luego de entrar el gasto
    props.handleCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Cuál fue el gasto?</label>
          <input type="text" value={enteredTitle} onChange={HandleTitle} />
        </div>
        <div className="new-expense__control">
          <label>Cúanto dinero costó?</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Fecha</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={handleDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.handleCancel}>
          Cancelar
        </button>
        <button type="submit">Agregar Gasto</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
