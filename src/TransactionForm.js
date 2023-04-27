import { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      description: description,
      category: category,
      amount: amount,
    };
    addTransaction(newTransaction);
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={amount}S
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;