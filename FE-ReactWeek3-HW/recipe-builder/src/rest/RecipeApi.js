// all of the logic to make a network call for the HousesAPI
const RECIPE_ENDPOINT = 'https://crudcrud.com/api/467446f2b41f4ea58e1a553fd9faaf72/recipes';

// class to house a couple of functions or methods
class RecipeApi {
    get = async () => {
        try {
            console.log(RECIPE_ENDPOINT)
            const resp = await fetch(RECIPE_ENDPOINT);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchRecipes had an issue.', e);
        }
       
    }

    post = async (recipe) => {
        try {
            const resp = await fetch(`${RECIPE_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(recipe)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like posting recipes had an issue.', e);
        }  
    }

    put = async (recipe) => {
        try {
            const resp = await fetch(`${RECIPE_ENDPOINT}/${recipe._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(recipe)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating recipes had an issue.', e);
        }  
    }
}

// create an instance of this class, and we can import that instance.
export const recipeApi = new RecipeApi();