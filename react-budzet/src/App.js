import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SingleColumn from "./components/SingleColumn";

function App() {
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  return (
    <div className="container text-center m-4">
      <Header />
      <div className="row">
        <SingleColumn
          columnName="Przychody"
          nameInputPlaceholder="Nazwa przychodu"
          amountInputPlaceholder="Kwota"
          listName={incomeList}
          setListName={setIncomeList}
          sumName="przychodów"
        />
        <SingleColumn
          columnName="Wydatki"
          nameInputPlaceholder="Nazwa wydatku"
          amountInputPlaceholder="Kwota"
          listName={expensesList}
          setListName={setExpensesList}
          sumName="wydatków"
        />
      </div>
    </div>
  );
}

export default App;
