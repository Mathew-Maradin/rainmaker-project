import React, { useState } from 'react';

const Search = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(1.1234); // Placeholder rate
  const [country, setCountry] = useState('Germany'); // Placeholder country
  const [amount, setAmount] = useState(1);

  const handleConvert = () => {
    // Implement your conversion logic here
    // Update the conversionRate, country, and result
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex space-x-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          {/* Add more currency options */}
        </select>
      </div>
      <div className="mt-4">
        <input
          type="number"
          readOnly
          value={conversionRate * amount}
          className="p-2 border rounded"
        />
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          {/* Add more currency options */}
        </select>
      </div>
      <div className="mt-8 bg-gray-100 p-4 border rounded-lg text-center">
        <p>Conversion Rate: {conversionRate}</p>
        <p>Country: {country}</p>
        <p>Result: {conversionRate * amount}</p>
        <button onClick={handleConvert} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Convert
        </button>
      </div>
    </div>
  );
};

export default Search;