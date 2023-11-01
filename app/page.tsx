"use client";
import Image from "next/image";
import { getQuote } from "@/quote";
import { USDC, ETH } from "@/tokens";
import { BigNumber } from "ethers";
import Header from "../app/components/header/header"
import Footer from "../app/components/footer/footer"
import Search from "../app/components/search/search"
import Table from "../app/components/table/table"
import React, { useState } from 'react';
import svgImage from '../public/rain.svg';

const FROM_TOKEN = USDC;
const FROM_AMOUNT = BigNumber.from("1000000");
const TO_TOKEN = ETH;

export default function Home() {
  const [quote, setQuote] = useState({ value1: 0, value2: 0 });
  const [fromCurrency, setFromCurrency] = useState("USDT");
  const [toCurrency, setToCurrency] = useState("ORBS");
  const [amount, setAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);


  const handleClick = async () => {
    try {
      const selectedFromToken = fromCurrency; // Get the selected 'from' token
      const selectedToToken = toCurrency;     // Get the selected 'to' token
  
      console.log("Selected 'from' token:", selectedFromToken);
      console.log("Selected 'to' token:", selectedToToken);
  
      // You can use these selected tokens in your quote logic here
  
      // const result = await getQuote(FROM_TOKEN, TO_TOKEN, FROM_AMOUNT);
      const result = await getQuote(fromCurrency, toCurrency, amount);
      console.log(result);
      setQuote({ value1: result.swapBalance, value2: result.slippagePercent });
      setToAmount(result.swapBalance)
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };


  return (
    <main className="bg-slate-800">
      <Header />
      {/* <Search /> */}

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
              <option value="WETH">CHAMP</option>
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
              className="p-2 border rounded ml-2"
            >
              <option value="ORBS">ORBS</option>
              <option value="USDT">USDT</option>
              <option value="TEL">TEL</option>
              <option value="WETH">CHAMP</option>
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



      <Table />


      <Footer />
    </main>
  );
}
