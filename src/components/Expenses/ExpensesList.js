import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  //conditional rendering. si no hay gastos muestra mensaje, sino muestra los gastos
  if (items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No se encontraron gastos.</h2>
    );
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
