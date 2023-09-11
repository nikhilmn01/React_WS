import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';

import InvestmentForm from './Components/InvestmentForm';
import InvestmentTable from './Components/InvestmentTable';

function App() {
  const [formData, setFormData] = useState([]);
  const handleFormData = (formInputData) => {
    setFormData(formInputData);
    console.log(formInputData);
  }
  const clearTable = () => {
    setFormData([]);
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvestmentForm onSubmitForm={handleFormData} />

      <InvestmentTable tableData={formData} />

      <div className='actions'>
        {formData.length > 0 ? <button type="reset" className="button result" onClick={clearTable}>
          Clear Table!
        </button> : ''}
      </div>
    </div>
  );
}

export default App;
