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

    fetchRecipes ()  {
        const recipes =  recipeApi.get();
        this.setState({ recipes });
    };

    createRecipe = async (newRecipe) => {
        await recipeApi.post(newRecipe);
        this.fetchRecipes();
    };

    updateRecipe = async (updatedRecipe)  =>{
        await recipeApi.put(updatedRecipe);
        this.fetchRecipes();
    };

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
        const recipes = this.props.recipes 
        ? this.props.data.recipes.map((recipe, index) =>
            <div>
                <Recipe 
                    key={index}
                    createRecipe={this.createRecipe}
                    name={recipe.name} 
                    numberServed={recipe.numberServed}
                    category={recipe.category} 
                    ingredients={recipe.ingredients}
                />
                <button onClick={e =>
                    this.props.deleteRecipe(e, this.props.data, recipe)}>Delete</button>
            </div>)
        : null;

        return (
            <div className="container p-4  recipe-list">
                <h4>Recipes:</h4>
                <div>
                    <ul>
                        {recipes}
                    </ul>
                    <br /> <br />                
                    <NewIngredientForm
                        addNewIngredient={this.props.addNewIngredient} data={this.props.data} />
                </div>   
                <br /> <br />                
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