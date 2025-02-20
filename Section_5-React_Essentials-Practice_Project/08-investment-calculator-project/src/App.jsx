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
  useEffect(() => {
    console.log('Updated inputValues:', inputValues);
  }, [inputValues]);
  function handleChange(event) {
    const { id, value } = event.target;
    onInputChange(id, parseFloat(value));
    console.log('Updated inputValues:', inputValues);
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
      <Result data={investmentResults} />
    </>
  );
}

export default App
