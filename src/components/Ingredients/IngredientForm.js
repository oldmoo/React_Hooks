import React, { useState, memo } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = memo(props => {
  const [inputSate, setinputSate] = useState({ title: '', amount: '' })
  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text"
              id="title"
              value={inputSate.title}
              onChange={e => {
                const newTitle = e.target.value
                setinputSate(prevInpuState => ({
                  title: newTitle,
                  amount: prevInpuState.amount
                }))
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number"
              id="amount"
              value={inputSate.amount}
              onChange={e => {
                const newAmount = e.target.value
                setinputSate(prevInpuState => ({
                  title: prevInpuState.title,
                  amount: newAmount
                }))
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
