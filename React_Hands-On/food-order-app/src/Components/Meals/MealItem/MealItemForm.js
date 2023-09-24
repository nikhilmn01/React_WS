import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
    const amountinputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const enteredAmountNumber = Number(amountinputRef.current.value.trim());
        if(isNaN(enteredAmountNumber) || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        else{
            setAmountIsValid(true);
        }
        props.addToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={handleFormSubmit}>
            <Input
                ref={amountinputRef}
                label='Amount'
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>
                + Add
            </button>
            {!amountIsValid && <p>Entered Amount is invalid</p>}
        </form>);
}

export default MealItemForm;