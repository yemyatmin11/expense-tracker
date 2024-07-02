import React from 'react';
import Transaction from './Transaction';

export default function TransactionList({transactions, deleteTransaction}) {

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>
        ))}
      </ul>
    </>
  )
}
