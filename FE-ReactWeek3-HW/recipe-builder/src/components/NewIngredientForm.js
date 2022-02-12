import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


// importing { useState } allows us to use Hooks!

export const NewIngredientForm = (props) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(undefined);
    const [units, setUnits] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleQuantityInput = (e) => {
        const int = parseInt(e.target.value, 10);
        // no negative numbers... if negative, pass in an empty string
        setQuantity(int >= 0 ? int : '');   
    }   // end of handleQuantityInput

    const onSubmit = (e) => {
        // the default submit action WILL not occur!
        e.preventDefault();
        if (name && quantity && units) {
            console.log("In OnSubmit Ingredients");
            props.addNewIngredient({name, quantity, units, instructions});
            setName('');
            setQuantity('');
            setUnits('');
            setInstructions('');          
        } else {
            console.log('Invalid Ingredient Input');
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
        <div className="new-ingredient border container p-4">
            <h4>Add a New Ingredient</h4>
            <Form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                /> <span>&nbsp;&nbsp;</span>
                <input
                    type='text'
                    placeholder='How many -- #'
                    onChange={handleQuantityInput}
                    value={quantity} 
                    /> <span>&nbsp;&nbsp;</span>
                <input
                    type='text'
                    placeholder='Tbsp, tsp, lb, oz, etc.'
                    onChange={(e) => setUnits(e.target.value)}
                    value={units}
                /> <br /><br />
                <textarea
                    type='text'
                    cols='66'
                    placeholder='Instructions for this ingredient...'
                    onChange={(e) => setInstructions(e.target.value)}
                    value={instructions}
                /> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Button className='btn-dark' type='submit'>Add Ingredient</Button>
            </Form>
        </div>
    ) // end of return
}; // end of NewIngredientForm function