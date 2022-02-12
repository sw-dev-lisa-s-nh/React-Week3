import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


// importing { useState } allows us to use Hooks!

export const NewRecipeForm = (props) => {
    const { createRecipe } = props;
    const [name, setName] = useState('');
    const [numberServed, setNumberServed] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState([]);


    const handleNumberServedInput = (e) => {
        const int = parseInt(e.target.value, 10);
        // no negative numbers... if negative, pass in an empty string
        setNumberServed(int >= 0 ? int : '');   
    }   // end of handleQuantityInput

    const onSubmit = (e) => {
        // the default submit action WILL not occur!
        e.preventDefault();
        if (name && category) {
            createRecipe({name, numberServed, category, ingredients});
            setName('');
            setCategory('');
            setNumberServed('');
            setIngredients('');
        } else {
            alert('Invalid input:  Please re-enter ingredient!');
            console.log('Invalid Recipe Input-- needs to be re-entered!');
        }
    }; // end of onSubmit


    // create the JSX for this element -- create the return statement

    // name:  everytime the text changes... this name value in the state is also being updated
    // quantity:  everytime the text changes... call handleQuantityInput 
    // units:  everytime the text changes... this units value in the state is also being updated
    // instructions:  everytime the text changes... this instructions value in the state is also being updated

    // the last part of tying the state variable back to the actual value of these inputs 
    //              is "value={name}", "value={quantity}", "value={units}" & "value={instructions}"   
    //              the onChange always updates the state value, 
    //              and the state value updates the value in this input.
    //              So they stay tied together both ways!!!
    return  (
        <div className="new-recipe">
            <div className="p-2 border">
                <h4><strong>Enter a New Recipe</strong></h4>
                <Form onSubmit={onSubmit}>
                    <input
                        type='text'
                        placeholder='Recipe Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Number of Servings'
                        onChange={handleNumberServedInput}
                        value={numberServed}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Main, App, Dessert...'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button 
                        className='btn-my-color rounded' 
                        type='submit' 
                        onClick={onSubmit}>Add Recipe</button>
                    <br />
                </Form>
            </div>
        </div>
        ) // end of return
}; // end of NewIngredientForm function