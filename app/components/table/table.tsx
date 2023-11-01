import React from 'react';

const DarkThemeTable = () => {
  const tableData = [
    { market: 'USDC/ORBS', basePrice: 100, volume24h: 10000 },
    { market: 'ORBS/USDC', basePrice: "$ 0.0413", volume24h: "$ 43,945.51" },
    { market: 'Market 3', basePrice: 120, volume24h: 8000 },
    { market: 'Market 4', basePrice: 90, volume24h: 6000 },
    { market: 'Market 5', basePrice: 200, volume24h: 12000 },
    { market: 'Market 1', basePrice: 100, volume24h: 10000 },
    { market: 'Market 2', basePrice: 150, volume24h: 7500 },
    { market: 'Market 3', basePrice: 120, volume24h: 8000 },
    { market: 'Market 4', basePrice: 90, volume24h: 6000 },
    { market: 'Market 5', basePrice: 200, volume24h: 12000 },
    { market: 'Market 1', basePrice: 100, volume24h: 10000 },
    { market: 'Market 2', basePrice: 150, volume24h: 7500 },
    { market: 'Market 3', basePrice: 120, volume24h: 8000 },
    { market: 'Market 4', basePrice: 90, volume24h: 6000 },
    { market: 'Market 5', basePrice: 200, volume24h: 12000 },
  ];

  return (
    <div className="flex justify-center items-center my-5">
      <table className="table-auto bg-slate-800 text-white rounded-lg p-8 text-lg w-4/5">
        <thead>
          <tr>
            <th className="px-4 py-2 text-xl font-semibold border-b">Market</th>
            <th className="px-4 py-2 text-xl font-semibold border-b">Base Price</th>
            <th className="px-4 py-2 text-xl font-semibold border-b">24-Hour Volume</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-center">{data.market}</td>
              <td className="px-4 py-2 text-center">{data.basePrice}</td>
              <td className="px-4 py-2 text-center">{data.volume24h}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DarkThemeTable;