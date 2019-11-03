import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList'
import Search from './Search';

const Ingredients = () => {
  const [ingredientsList, setIngredientsList] = useState([])

  const addIngredientHandler = ingredient => {
    setIngredientsList(prevIngredints => [...prevIngredints, { id: Math.random().toString, ...ingredient }])
  }
  return (
    <div className="App">
      <IngredientForm OnAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={ingredientsList} onRemoveItem={() => { }} />
      </section>
    </div>
  );
}

export default Ingredients;
