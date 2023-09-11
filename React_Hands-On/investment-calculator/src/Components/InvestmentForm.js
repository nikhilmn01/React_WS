import { useState } from 'react';

const InvestmentForm = (props) => {
    const [formObj, setFormObj] = useState({
        currentSavings: '',
        yearlyContribution: '',
        expectedReturn: '',
        duration: ''
    });

    const calculateHandler = (userInput) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...

        const yearlyData = []; // per-year results

        let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearlyContribution']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expectedReturn'] / 100;
        const duration = +userInput['duration'];
        let oldIntrest = 0;
        let investedCapital = currentSavings + yearlyContribution;
        for (let i = 0; i < duration; i++) {
            if(i!==0){
                oldIntrest = yearlyData[i-1].yearlyInterest;
                investedCapital += yearlyContribution;
            }
            
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                savingsEndOfYear: currentSavings,
                yearlyInterest: yearlyInterest,
                totalIntrest: yearlyInterest+oldIntrest,
                investedCapital: investedCapital,
            });
        }
        console.log(yearlyData);
        return yearlyData;
    };

    const handleInputChange = (identifier, event) => {
        setFormObj((previousValue) => ({
            ...previousValue,
            [identifier]: event.target.value
        }));
    }
    const handleReset = () => {
        setFormObj({
            currentSavings: '',
            yearlyContribution: '',
            expectedReturn: '',
            duration: ''
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let submitRequest = { ...formObj };
        setFormObj({
            currentSavings: '',
            yearlyContribution: '',
            expectedReturn: '',
            duration: ''
        });
        let yearlyData = calculateHandler(submitRequest);
        props.onSubmitForm(yearlyData);
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings" value={formObj.currentSavings} onChange={(event) => handleInputChange('currentSavings', event)} />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution" value={formObj.yearlyContribution} onChange={(event) => { handleInputChange('yearlyContribution', event) }} />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input type="number" id="expected-return" value={formObj.expectedReturn} onChange={(event) => { handleInputChange('expectedReturn', event) }} />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration" value={formObj.duration} onChange={(event) => { handleInputChange('duration', event) }} />
                    </p>
                </div>
                <p className="actions">
                    <button type="reset" className="buttonAlt" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Calculate
                    </button>
                </p>
            </form>
        </div>

    );
}

export default InvestmentForm;