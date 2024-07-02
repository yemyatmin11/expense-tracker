import React, { useState } from 'react'


export default function AddTransaction({addTransaction}) {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const transaction = {
            id : Math.random(),
            text,
            amount : +amount
        }

        addTransaction(transaction);
        setText('');
        setAmount('');
    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit} id="form">
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input 
                    type="text" 
                    id="text" 
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Enter text..." 
                />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input 
                    type="number" 
                    id="amount" 
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="Enter amount..." 
                />
            </div>
            <button type='submit' className="btn">Add transaction</button>
        </form>
    </>
  )
}
