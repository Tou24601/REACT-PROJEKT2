import "./reset.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import SingleColumn from "./components/SingleColumn";

function App() {
  return (
    <div className="App">
    <Header />
    <row>
    <SingleColumn columnName="Przychody" nameInputId="incomeNameInput" nameInputPlaceholder="Nazwa przychodu" numberInputId="incomeNumber" numberInputPlaceholder="Kwota przychodu" sumName="przychodów" sumId="incomeSum" />
    <SingleColumn columnName="Wydatki" nameInputId="expensesNameInput" nameInputPlaceholder="Nazwa wydatku" numberInputId="expensesNumber" numberInputPlaceholder="Kwota wydatku" sumName="wydatków" sumId="expensesSum" />
    </row>
    </div>
  );
}

export default App;
