import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import SingleColumn from "./components/SingleColumn";
import ListItem from "./components/ListItem";

function App() {



  return (
    <div className="container text-center m-4">
      <Header />
      <div className="row">
        <SingleColumn
          columnName="Przychody"
          nameInputId="incomeNameInput"
          nameInputPlaceholder="Nazwa przychodu"
          numberInputId="incomeNumber"
          numberInputPlaceholder="Kwota"
          buttonId="incomeButton"
          listName="incomeList"
          unorderedListId="unorderedListIncome"
          sumName="przychodów"
          sumId="incomeSum"
        />
        <SingleColumn
          columnName="Wydatki"
          nameInputId="expensesNameInput"
          nameInputPlaceholder="Nazwa wydatku"
          numberInputId="expensesNumber"
          numberInputPlaceholder="Kwota"
          buttonId="expensesButton"
          listName="expensesList"
          handleClick=""
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
