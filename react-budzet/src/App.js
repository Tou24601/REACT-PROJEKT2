import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SingleColumn from "./components/SingleColumn";

function App() {
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  const handleIncomesChange = (newIncomes) => {
    setIncomeList(newIncomes);
  };
  const handleExpensesChange = (newExpenses) => {
    setExpensesList(newExpenses);
  };

  const [balance, setBalance] = useState(0);

  const sendSumValues = (incomesSumValue, expensesSumValue) => {
    const newBalance = incomesSumValue - expensesSumValue;
    console.log(newBalance)
    setBalance(newBalance);
  };

  return (
    <div className="container text-center m-4">
      <Header balance={balance} />
      <div className="row">
        <SingleColumn
          columnName="Przychody"
          nameInputPlaceholder="Nazwa przychodu"
          listName={incomeList}
          handleListChange={handleIncomesChange}
          sumName="przychodów"
          sendSumValues={sendSumValues}
        />
        <SingleColumn
          columnName="Wydatki"
          nameInputPlaceholder="Nazwa wydatku"
          listName={expensesList}
          handleListChange={handleExpensesChange}
          sumName="wydatków"
          sendSumValues={sendSumValues}
        />
      </div>
    </div>
  );
}

export default App;
