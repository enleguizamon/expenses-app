import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//gastos de prueba
const DUMMY__EXPENSES = [
  {
    id: "e5",
    title: "Cuadro",
    amount: 5000,
    date: new Date("2019/12/2"),
  },
  {
    id: "e6",
    title: "Celular",
    amount: 23000,
    date: new Date("2019/10/5"),
  },
  {
    id: "e1",
    title: "Torta de cumple",
    amount: 940.5,
    date: new Date("2020/7/1"),
  },
  {
    id: "e2",
    title: "Tele",
    amount: 66000,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Caloventor",
    amount: 2900,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Escritorio",
    amount: 45000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY__EXPENSES);

  //recibo los gastos del formulario y los agrego a los demás
  //y los mando desde Expenses a la lista
  const handleCallback = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense handleCallback={handleCallback} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
