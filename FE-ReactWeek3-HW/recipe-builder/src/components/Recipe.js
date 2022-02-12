import React from 'react';
// import { Card } from 'react-bootstrap';
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
                    <label> {`${ingredient.name} Quantity: ${ingredient.quantity} Units: ${ingredient.units}\n Instructions: ${ingredients.instructions}`} </label>
                    <button onClick={(e) => deleteIngredient(ingredient.name)}>Delete Ingredient</button>
                </li>
            ))}
          </ul>   
        : null      
    )

    // WHY DOES THIS WORK?????
    //      ingredients is a function
    //      It is taking props:  ingredients, recipeId, deleteIngredient function
    //      

    return (
      <div className="card-recipe p-2">
        <h1>{recipe.name}</h1>                          

        <h4><strong>Ingredients: </strong></h4>
            {
                ingredients ({ ingredients, recipeId: recipe._id, deleteIngredient})
            }
            <NewIngredientForm addNewIngredient={addNewIngredient} />  
             <br /> <br />
      </div>
    );
};


// <Card className="card-recipe p-2 border border-primary">
// <Card.Header>
//     <span>&nbsp; &nbsp; </span>
//     <strong>{recipe.id}.</strong> <span>&nbsp;</span><strong>{recipe.name}</strong>                          
// </Card.Header>
// <Card.Body>
//     <div className="cardBody p-2">
//         <strong>Number of Servings: </strong>  {recipe.numberServed}
//         <br /><br />
//         <strong>Category: </strong> {recipe.category}
//         <br /><br />
//         <strong>Ingredients: </strong> <span>&nbsp; &nbsp;</span>
//         {
//             ingredients ({ ingredients, recipeId: recipe._id, deleteIngredient})

//         }
//         <br /><br />
//         </div>
//     </Card.Body>
//     <br />
//     <Card.Footer className="text-muted p-2"> 
//         <div>
//             <NewIngredientForm addNewIngredient={addNewIngredient} />  
//             <br /> <br />
//         </div>
      
//        End of <strong>{recipe.name}</strong>
//     </Card.Footer>
// </Card> 







// <div>
// <h1>{recipe.name}</h1>
// <h2>Number of Servings: {recipe.numberServed}</h2>
// <h2>Category: {recipe.category}</h2>
// {
//     ingredients ({ ingredients, recipeId: recipe._id, deleteIngredient})
// }
// <NewIngredientForm addNewIngredient={addNewIngredient} />
// </div>