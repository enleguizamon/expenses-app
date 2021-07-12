import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //Estado para mostrar el formulario
  const [isEditing, setIsEditing] = useState(false);

  //recibo la data del form
  const handleCallback = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.handleCallback(expenseData);
  };

  //boton de agregar muestra el formulario
  const AddExpense = () => {
    setIsEditing(true);
  };

  //boton de cancelar (esta en el formulario) para dejar de mostrar el formulario
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          handleCallback={handleCallback}
          handleCancel={handleCancel}
        />
      ) : (
        <button onClick={AddExpense}>Agregar Nuevo Gasto</button>
      )}
    </div>
  );
};

export default NewExpense;
