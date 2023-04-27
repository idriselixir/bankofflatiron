import React, { useState, useEffect } from 'react';

import './App.css';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';
import MyComponent from './MyComponent';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error(error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearchChange = (searchTerm) => {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setTransactions(filteredTransactions);
  };

  return (
    <div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar onSearchChange={handleSearchChange} />
      <TransactionTable transactions={transactions} />
    <MyComponent/>
    </div>
  )
}

export default App;