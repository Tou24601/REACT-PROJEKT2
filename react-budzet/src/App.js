import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SingleColumn from "./components/SingleColumn";

function App() {
  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  /*const addNewItemToList = (item) => {
    console.log(item)
    //jak wytłumaczyć mu, którą listę ma wybrać? czy wybrać listę tu i przekazać do singlecolumn, żeby tam dodał to do listy? czy wcisnąć mu tutaj listę?
          //type === "incomes"
        //? setIncomeList([...incomeList, newItem])
       // : setExpensesList([...expensesList, newItem]);
  }*/

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
          //handleNewItem={addNewItemToList}
          sumName="przychodów"
        />
        <SingleColumn
          columnName="Wydatki"
          nameInputPlaceholder="Nazwa wydatku"
          amountInputPlaceholder="Kwota"
          setListName={setExpensesList}
          listName={expensesList}
          sumName="wydatków"
        />
      </div>
    </div>
  );
}

export default App;
