import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SingleColumn from "./components/SingleColumn";

function App() {
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  const [incomesSum, setIncomesSum] = useState(0);
  const [expensesSum, setExpensesSum] = useState(0);

  const handleListChange = (newList, type) => {
    if (type === "incomes") {
      setIncomeList(newList);
    } else {
      setExpensesList(newList);
    }
  };

  const [balance, setBalance] = useState(0);
  const newBalance = incomesSum - expensesSum;

  useEffect(() => {
    setBalance(newBalance);
  }, [newBalance]);

  const sendSumValues = (sum, type) => {
    if (type === "incomes") {
      setIncomesSum(sum);
    } else {
      setExpensesSum(sum);
    }
  };

  return (
    <div className="container text-center m-4">
      <Header balance={balance} />
      <div className="row">
        <SingleColumn
          columnName="Przychody"
          nameInputPlaceholder="Nazwa przychodu"
          listName={incomeList}
          handleListChange={(newList) => handleListChange(newList, "incomes")}
          sumName="przychodów"
          sumValue={incomesSum}
          sendSumValues={(sum) => sendSumValues(sum, "incomes")}
        />
        <SingleColumn
          columnName="Wydatki"
          nameInputPlaceholder="Nazwa wydatku"
          listName={expensesList}
          handleListChange={(newList) => handleListChange(newList, "expenses")}
          sumName="wydatków"
          sumValue={expensesSum}
          sendSumValues={(sum) => sendSumValues(sum, "expenses")}
        />
      </div>
    </div>
  );
}

export default App;
