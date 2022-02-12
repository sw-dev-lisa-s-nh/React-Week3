import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

// importing { useState } allows us to use Hooks!

export const NewIngredientForm = (props) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(undefined);
    const [units, setUnits] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleQuantityInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setQuantity(int >= 0 ? int : '');   
    }   // end of handleQuantityInput

    const onSubmit = (e) => {
        // the default submit action WILL not occur!
        e.preventDefault();
        if (name && quantity && units) {
            // console.log("In OnSubmit Ingredients");
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

    // the last part of tying the state variable back to the actual value of these inputs 
    //     is "value={name}", "value={quantity}", "value={units}" & "value={instructions}"   
    //     The onChange always updates the state value, 
    //         & the state value updates the value in this input, so stay tied together both ways!!!
    return  (
        <div className="new-ingredient border p-2">
            <h4><strong>Add a New Ingredient</strong></h4>
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
                <input
                    type='text'
                    placeholder='Any instructions?'
                    onChange={(e) => setInstructions(e.target.value)}
                    value={instructions}
                /> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button className='btn-my-color rounded' type='submit'>Add Ingredient</button>
            </Form>
        </div>
    ) // end of return
}; // end of NewIngredientForm function