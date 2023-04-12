import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SingleColumn from "./components/SingleColumn";
import ListItem from "./components/ListItem";

function App() {
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([])

  const [nameInputValue, setNameInputValue] = useState("")
  const [amountInputValue, setAmountInputValue] = useState("")

  const addItem = (listName, functionName) => {
    if (
      nameInputValue === "" ||
      amountInputValue === "" ||
      amountInputValue <= 0
    ) {
      alert("Wprowadź poprawne dane");
    }
    const newItem = {
      name: nameInputValue,
      value: amountInputValue,
      id: Date.now(),
    };
    const newList = listName.push(newItem)
    console.log(nameInputValue)
    console.log(amountInputValue)
    console.log(listName);

    functionName = () => {
      listName = newList
      return newList;
    }
    console.log(incomeList)
  }

  return (
    <div className="container text-center m-4">
      <Header />
      <div className="row">
        <SingleColumn
          columnName="Przychody"
          nameInputId="incomeNameInput"
          nameInputPlaceholder="Nazwa przychodu"
          nameInputValue=""
          handleNameInputChange={e => setNameInputValue(e.target.value)}
          amountInputId="incomeNumber"
          amountInputPlaceholder="Kwota"
          handleAmountInputChange={e => setAmountInputValue(e.target.value)}
          buttonId="incomeButton"
          handleClick={() => addItem(incomeList, setIncomeList)}
          unorderedListId="unorderedListIncome"
          sumName="przychodów"
          sumId="incomeSum"
        />
        <SingleColumn
          columnName="Wydatki"
          nameInputId="expensesNameInput"
          nameInputPlaceholder="Nazwa wydatku"
          amountInputId="expensesNumber"
          amountInputPlaceholder="Kwota"
          buttonId="expensesButton"
          handleClick={/*addItem(expensesList, setExpensesList)*/""}
          unorderedListId="unorderedListexpenses"
          sumName="wydatków"
          sumId="expensesSum"
        />
      </div>
      <ListItem />
    </div>
  );
}

export default App;
