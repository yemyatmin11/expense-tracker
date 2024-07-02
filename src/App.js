
import { useEffect, useState } from 'react';
import './App.css';
import AddTransition from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransitionList from './components/TransactionList';

function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/transactions")
    .then(res => res.json())
    .then(transactions => {
      setTransactions(transactions)
    })
  }, []);

  const deleteTransaction = (transactionId) => {
    fetch(`http://localhost:3001/transactions/${transactionId}`, {
      method : "DELETE"
    })
    setTransactions(prevState => prevState.filter(transaction => transaction.id !== transactionId));
  }

  const addTransaction = (transaction) => {
    fetch("http://localhost:3001/transactions", {
      method : "POST",
      headers : {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(transaction)
    })
    setTransactions(prevState => [transaction,...prevState])
  }


  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Balance transactions={transactions}/>
        <IncomeExpense transactions={transactions}/>
        <TransitionList transactions={transactions} deleteTransaction={deleteTransaction}/>
        <AddTransition addTransaction={addTransaction}/>
      </div>
    </div>
  );
}

export default App;
