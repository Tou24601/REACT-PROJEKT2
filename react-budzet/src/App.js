import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SingleColumn from "./components/SingleColumn";

function App() {

  let [incomeList, setIncomeList] = useState([]);
  let [expensesList, setExpensesList] = useState([]);

  const [nameInputValue, setNameInputValue] = useState("");
  const [amountInputValue, setAmountInputValue] = useState("");

  const addItem = (listName, functionName) => {
    if (
      nameInputValue === "" ||
      amountInputValue === "" ||
      amountInputValue <= 0
    ) {
      alert("Wprowadź poprawne dane");
    } else {
      const newItem = {
        name: nameInputValue,
        value: amountInputValue,
        id: Date.now(),
      };
      listName.push(newItem);
      console.log(listName);
      
      return listName;
    }
  };

  return (
    <div className="container text-center m-4">
      <Header />
      <div className="row">
        <SingleColumn
          columnName="Przychody"
          nameInputPlaceholder="Nazwa przychodu"
          handleNameInputChange={(e) => setNameInputValue(e.target.value)}
          handleAmountInputChange={(e) => setAmountInputValue(e.target.value)}
          handleClick={() => addItem(incomeList, setIncomeList)}
          listName={incomeList}
          sumName="przychodów"
        />
        <SingleColumn
          columnName="Wydatki"
          nameInputPlaceholder="Nazwa wydatku"
          handleNameInputChange={(e) => setNameInputValue(e.target.value)}
          handleAmountInputChange={(e) => setAmountInputValue(e.target.value)}
          handleClick={() => addItem(expensesList, setExpensesList)}
          listName={expensesList}
          sumName="wydatków"
        />
      </div>
    </div>
  );
}

export default App;
