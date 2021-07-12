import Chart from "../Chart/Chart";

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "ene", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "abr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "ago", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dic", value: 0 },
  ];

  //recorro los gastos para obtener los meses y le agrego el amount al value
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); //enero seria el indice 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
