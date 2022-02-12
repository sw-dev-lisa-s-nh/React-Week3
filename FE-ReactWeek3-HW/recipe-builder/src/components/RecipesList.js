import  React from 'react';
import { Recipe } from './Recipe';
import { recipeApi } from '../rest/RecipeApi.js';
import { NewRecipeForm } from './NewRecipeForm';


export class RecipesList extends React.Component {   
    state = {
        recipes: []   
    };

    componentDidMount() {
        this.fetchRecipes();
    }

    fetchRecipes =  async () => {
        const returnedRecipes =  await recipeApi.get();
        // console.log('In fetchRecipes: ' + returnedRecipes);
        this.setState({ recipes: returnedRecipes });
    };

    createRecipe = async (newRecipe) => {
        await recipeApi.post(newRecipe);
        this.fetchRecipes();
    };

    updateRecipe = async (updatedRecipe)  =>{
        //console.log('In updateRecipe: ' + updatedRecipe);
        await recipeApi.put(updatedRecipe);
        this.fetchRecipes();
    };

    deleteRecipe = async (recipeId) => {
        await recipeApi.delete(recipeId);
        this.fetchRecipes();
    }
   
    render() {
        console.log('In render: ' + this.state.recipes);
        const recipes = this.state.recipes
        ? this.state.recipes.map((recipe) =>
           <div className="round-corner container-fluid">
              <div className="single-recipe border p-2">
                <Recipe 
                    key={recipe._id}
                    recipe= {recipe}
                    updateRecipe={this.updateRecipe}
                /><br />
                <button className="btn-my-color rounded" onClick={e =>
                    this.deleteRecipe(recipe._id)}>Delete Recipe</button>
                    <br /><br />
               </div>
               <br /> <br /> 
            </div>)
        : null;
        console.log('Recipes in RecipeList: ' + recipes);

        return (
            <div className="recipe-div p-2 border recipe-list">
                <h1>Recipe Builder</h1>
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