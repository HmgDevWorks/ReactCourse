import { useState, useEffect } from 'react';
import Header from './components/Header';
import Result from './components/Result';
import UserInput from './components/UserInput';
import { calculateInvestmentResults } from './util/investment';


const initialValues = [
  { id: 'initial-investment', label: 'Initial Investment', value: 1000 },
  { id: 'annual-investment', label: 'Annual Investment', value: 1000 },
  { id: 'expected-return', label: 'Expected Return (%)', value: 5 },
  { id: 'duration', label: 'Duration (years)', value: 10 },
];


function App() {
  const [inputValues, setInputValues] = useState(initialValues);

  function onInputChange(id, value) {
    setInputValues((prevValues) =>
      prevValues.map((item) =>
        item.id === id ? { ...item, value: value } : item
      )
    );
  }

  // The teacher user initialValues as an Object and user this function for change a value
  // initial values should be like current investmentParams
  //-------------------------------------------
  // function handleChange(inputId, newValue) {
  //   setInputValues((prevUserInputValues) => {
  //     return {
  //       ...prevUserInputValues,
  //       [inputID]: +newValue,
  //     }
  //   });
  // }

  function handleChange(event) {
    const { id, value } = event.target;
    onInputChange(id, parseFloat(value));
  }

  const investmentParams = {
    initialInvestment: inputValues.find(item => item.id === 'initial-investment').value,
    annualInvestment: inputValues.find(item => item.id === 'annual-investment').value,
    expectedReturn: inputValues.find(item => item.id === 'expected-return').value,
    duration: inputValues.find(item => item.id === 'duration').value,
  };

  const [investmentResults, setInvestmentResults] = useState([]);

  useEffect(() => {
    setInvestmentResults(calculateInvestmentResults(investmentParams));
  }, [inputValues]);

  return (
    <>
      <Header />
      <UserInput values={inputValues} onInputChange={handleChange} />
      {investmentParams.duration <= 0 && <p className='center'>Please enter a duration higher than 0</p>}
      {investmentParams.duration > 0 && <Result data={investmentResults} initialInvetment={investmentParams.initialInvestment} />}
    </>
  );
}

export default App
