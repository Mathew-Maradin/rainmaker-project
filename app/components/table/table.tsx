import React from 'react';

const DarkThemeTable = () => {
  const tableData = [ // I wanted to use QuickSwap API to just call these swaps but its a pro feature so unfortunately they are hardcoded
    { market: 'USDC/ORBS', basePrice: "$ 1.02", volume24h: "$ 44,876.82"},
    { market: 'ORBS/USDC', basePrice: "$ 0.0413", volume24h: "$ 43,945.51"},
    { market: 'CHAMP/USDT', basePrice: "$ 0.00569", volume24h: "$ 37,996.60"},
    { market: "USDT/CHAMP", basePrice: "$ 1.03", volume24h: "$ 37,143.71"},
    { market: "USDC/WETH", basePrice: "$ 1.02", volume24h: "$ 28,685.19"},
    { market: "WETH/USDC", basePrice: "$ 1,811.93", volume24h: "$ 28,202.95"},
    { market: "BLOK/USDT", basePrice: "$ 0.00151", volume24h: "$ 19,933.07"},
    { market: "USDT/BLOK", basePrice: "$ 1.01", volume24h: "$ 19,748.29"},
    { market: "WETH/WMATIC", basePrice: "$ 1,846.46", volume24h: "$ 19,392.63"},
    { market: "WMATIC/WETH", basePrice: "$ 0.650", volume24h: "$ 18,947.49"},
    { market: "USDC/WMATIC", basePrice: "$ 0.999", volume24h: "$ 16,868.47"},
    { market: "WMATIC/USDC", basePrice: "$ 0.653", volume24h: "$ 16,750.48"},
    { market: "WETH/TEL", basePrice: "$ 1,823.85", volume24h: "$ 15,231.73"},
    { market: "TEL/WETH", basePrice: "$ 0.00195", volume24h: "$ 14,536.24"},
  ];

  return (
    <div className="flex justify-center items-center my-9">
      <table className="table-auto bg-slate-800 text-white rounded-lg p-8 text-lg w-4/5">
        <thead>
          <tr>
            <th className="px-4 py-2 text-xl font-semibold border-b text-center">Market</th>
            <th className="px-4 py-2 text-xl font-semibold border-b text-center">Base Price</th>
            <th className="px-4 py-2 text-xl font-semibold border-b text-center">24-Hour Volume</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-left text-center">{data.market}</td>
              <td className="px-4 py-2 text-left text-center">{data.basePrice}</td>
              <td className="px-4 py-2 text-left text-center">{data.volume24h}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DarkThemeTable;