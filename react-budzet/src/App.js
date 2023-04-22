import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SingleColumn from "./components/SingleColumn";

function App() {
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  const [incomesSum, setIncomesSum] = useState(0);
  const [expensesSum, setExpensesSum] = useState(0);
  const [balanceMsg, setBalanceMsg] = useState(0);

  const balance = incomesSum - expensesSum;
  


  return (
    <div className="container text-center m-4">
      <Header balanceMsg={balanceMsg} balance={balance} setBalanceMsg={setBalanceMsg} />
      <div className="row">
        <SingleColumn
          columnName="Przychody"
          nameInputPlaceholder="Nazwa przychodu"
          amountInputPlaceholder="Kwota"
          listName={incomeList}
          setListName={setIncomeList}
          setListSum={setIncomesSum}
          listSum={incomesSum}
          sumName="przychodów"
        />
        <SingleColumn
          columnName="Wydatki"
          nameInputPlaceholder="Nazwa wydatku"
          amountInputPlaceholder="Kwota"
          listName={expensesList}
          setListName={setExpensesList}
          setListSum={setExpensesSum}
          listSum={expensesSum}
          sumName="wydatków"
        />
      </div>
    </div>
  );
}

export default App;
