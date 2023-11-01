"use client";
import React, { useState } from 'react';
import { getQuote } from "@/quote";
import Image from "next/image";
import { USDC, ETH } from "@/tokens";
import { BigNumber } from "ethers";
import svgImage from '../public/rain.svg';

const Search = () => {
  const [quote, setQuote] = useState({ value1: 0.0, value2: 0 });
  const [fromCurrency, setFromCurrency] = useState("TEL");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [amount, setAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);


  const handleClick = async () => {
    try {
      const selectedFromToken = fromCurrency; // Get the selected 'from' token
      const selectedToToken = toCurrency;     // Get the selected 'to' token
      const result = await getQuote(fromCurrency, toCurrency, amount);
      setQuote({ value1: result.swapBalance, value2: result.slippagePercent });
      setToAmount(result.swapBalance)
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="bg-slate-800">
      <div className="flex justify-center mt-8 mb-3">
        <div className="pr-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="p-2 border rounded"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="p-2 border rounded ml-2"
          >
            <option value="ORBS">ORBS</option>
            <option value="USDT">USDT</option>
            <option value="TEL">TEL</option>
            <option value="CHAMP">CHAMP</option>
            <option value="BLOK">BLOK</option>
          </select>
        </div>
        <div className="pl-4">
          <input
            type="number"
            value={toAmount}
            className="p-2 border rounded"
            readOnly
          />
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="p-2 border rounded ml-2"
          >
            <option value="ORBS">ORBS</option>
            <option value="USDT">USDT</option>
            <option value="TEL">TEL</option>
            <option value="CHAMP">CHAMP</option>
            <option value="BLOK">BLOK</option>
          </select>
        </div>
      </div>
  
      {/* Quote display */}
      <div className="flex flex-col items-center bg-slate-800 text-white p-6 rounded-lg">
        <button
          onClick={handleClick}
          className="bg-white hover:bg-gray-300 text-gray-800 p-4 rounded-lg shadow-md"
        >
          Get Quote
        </button>
        {quote.value1 !== null && (
          <div className="mt-4 border border-gray-600 rounded-lg p-4 mt-8">
            <h1 className="text-2xl font-semibold">{quote.value1 + " " + toCurrency}</h1>
            <p className="text-sm text-center">Slippage: {quote.value2 * 100}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;