import React, { Component } from 'react';
// import { NewRecipeForm } from './components/NewRecipeForm';
import { RecipesList } from './components/RecipesList';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <div className="container p-4">
                <RecipesList />
            </div>
        )
    }
}

export default App;

