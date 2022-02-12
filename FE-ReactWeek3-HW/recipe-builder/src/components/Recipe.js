import React from 'react';
import { NewIngredientForm } from './NewIngredientForm';

// stateless or functional component
export const Recipe = (props) => {
    const { recipe, updateRecipe } = props;

    const deleteIngredient = (ingredientName) => {
        const updatedRecipe=  {
            ...recipe,
            ingredients: recipe.ingredients.filter((x) => x.name !== ingredientName)
        };
        updateRecipe(updatedRecipe);
    };

    // Don't need a return, because it's a one-liner, and will automatically 
    //          return the results.
    // always add a new value in an array or an object...
    const addNewIngredient = (ingredient) =>  updateRecipe({ ...recipe, ingredients: [...recipe.ingredients, ingredient]});

    // bug here:   I had "{" instead of "(" -- rooms didn't render.
    const ingredients = () => (
        recipe.ingredients
        ? <ul>
            {recipe.ingredients.map((ingredient,index) => (
            <li key={index}>
                    <label> <strong>{ingredient.name}:</strong>  {ingredient.quantity} {ingredient.units} <span>&nbsp;&nbsp;</span>
                    <strong> &mdash; </strong> <span>&nbsp;&nbsp;</span> {ingredient.instructions}  </label>
                    <span>&nbsp; &nbsp; &nbsp;</span>
                    <button className="btn-my-color rounded" onClick={(e) => deleteIngredient(ingredient.name)}>Delete Ingredient</button>
                    <br /> <br />
                </li>
            ))}
          </ul>   
        : null      
    )

    // This works becuase:  ingredients() is a function
    //      It is taking props:  ingredients, recipeId, deleteIngredient function   

    return (
      <div className="card-recipe ">
        <h1>{recipe.name}</h1>                          

        <h4><strong>Ingredients: </strong></h4>
            {
                ingredients ({ ingredients, recipeId: recipe._id, deleteIngredient})
            }
            <NewIngredientForm addNewIngredient={addNewIngredient} />  
      </div>
    );
};
