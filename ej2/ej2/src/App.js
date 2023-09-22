import './App.css';
import Table from './components/Table';

const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 },
];

function App() {
  return (
    <div className="App">
      <Table netIncomes={netIncomes} />
    </div>
  );
}

export default App;
