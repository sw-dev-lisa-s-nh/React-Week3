import  React from 'react';
import { Recipe } from './Recipe';
import { recipeApi } from '../rest/RecipeApi.js';
import { NewRecipeForm } from './NewRecipeForm';
import { NewIngredientForm } from './NewIngredientForm.js';


export class RecipesList extends React.Component {   
    state = {
        recipes: []   
    };

    componentDidMount() {
        this.fetchRecipes();
    }

    fetchRecipes =  async () => {
        const returnedRecipes =  await recipeApi.get();
        console.log('In fetchRecipes: ' + returnedRecipes);
        this.setState({ recipes: returnedRecipes });
    };

    createRecipe = async (newRecipe) => {
        await recipeApi.post(newRecipe);
        this.fetchRecipes();
    };

    updateRecipe = async (updatedRecipe)  =>{
        console.log('In updateRecipe: ' + updatedRecipe);
        await recipeApi.put(updatedRecipe);
        this.fetchRecipes();
    };

    deleteRecipe = async (recipeId) => {
        await recipeApi.delete(recipeId);
        this.fetchRecipes();
    }

    // createRecipe = async (newRecipe) => {
    //     const addRecipe =  recipeApi.post(newRecipe);
    //     this.setState ({ ...addRecipe });
    //     this.fetchRecipes();
    // };

    // updateRecipe = async (updatedRecipe) => {
    //     await recipeApi.put(updatedRecipe);
    //     this.fetchRecipes();
    // };

   
    render() {
        console.log('In render: ' + this.state.recipes);
        const recipes = this.state.recipes
        ? this.state.recipes.map((recipe) =>
           <div>
              <div className="single-recipe rounded border p-4">
                <Recipe 
                    key={recipe._id}
                    recipe= {recipe}
                    updateRecipe={this.updateRecipe}
                />
                <button className="btn-dark" onClick={e =>
                    this.deleteRecipe(recipe._id)}>Delete Recipe</button>
                    <br /><br />
               </div>
               <br /> <br /> <br /> 
            </div>)
        : null;
        console.log('Recipes in RecipeList: ' + recipes);

        return (
            <div className="recipe-div rounded container p-4 border recipe-list">
                <h1>Recipes:</h1>
                <div>
                    <ul>
                        {recipes}
                    </ul>               
                </div>   

                <div>
                    <NewRecipeForm createRecipe={this.createRecipe}/>
                </div>
            </div>
        );
    };
};

// const recipes = this.props.recipes 
// ? this.props.data.recipes.map((recipe, index) =>
//     <li key={index}>
//         {recipe.name} Quantity: {recipe.quantity}
//         <button onClick={e =>
//             this.props.deleteRecipe(e, this.props.data, recipe)
//         }>Delete</button>
//     </li>)
// : null;


//  { <h4>Recipes:</h4>
//                     <div>
//                         {this.state.recipes.map((recipe) => (
//                             <Recipe
//                                 recipe={recipe}
//                                 name={recipe.name}
//                                 numberServed={recipe.numberServed}
//                                 category={recipe.category}
//                                 key={recipe._id}
//                                 createRecipe={this.createRecipe}
//                             />
//                         ))}
//                     </div>       
//                 </div>
//             ); 
        // } else {
        //     this.totalRecipes++;
        //     return (
        //         <div className="container m-3 p-3 border primary recipe-list">
        //         <h4>Recipes:</h4>
        //             <div>
        //             <Recipe {...
        //             {
        //                 id: 1,
        //                 key: 1,
        //                 name: 'Chocolate Berry Dessert',
        //                 numberServed:  '8',
        //                 category: 'Dessert'
        //             } } />
        //              <br /><br />
        //              </div>
        //         </div>
        //     );
        // }