import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  //me llega el año seleccionado desde ExpensesFilter
  const handleFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //filtro la lista de items para tener solo los del año seleccionado
  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} handleFilter={handleFilter} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
