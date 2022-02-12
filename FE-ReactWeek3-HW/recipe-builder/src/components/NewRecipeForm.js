import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


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
        } else {
            console.log('Invalid Recipe Input');
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
        <div className="new-recipe p-4 container border dark">
            <h4>Enter a New Recipe</h4>
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
                <br /><br />
                  <textarea
                    type='text'
                    cols='42'
                    placeholder='Category:  Main, App, Dessert...'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Button 
                    className='btn-dark' 
                    type='submit' 
                    onClick={onSubmit}>Add Recipe</Button>
                <br />
            </Form>
        </div>
    ) // end of return
}; // end of NewIngredientForm function