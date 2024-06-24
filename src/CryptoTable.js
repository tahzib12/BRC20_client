// src/CryptoTable.js
import React from 'react';

const data = [
  { symbol: '1INCH/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.480100', confidence: '$0.00065' },
  { symbol: 'AAVE/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$102.974', confidence: '$0.096' },
  { symbol: 'ACM/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$2.18700', confidence: '$0.0041' },
  { symbol: 'ADA/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.445704', confidence: '$0.00035' },
  { symbol: 'AERO/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$1.17204', confidence: '$0.0040' },
  { symbol: '1INCH/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.480100', confidence: '$0.00065' },
  { symbol: 'AAVE/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$102.974', confidence: '$0.096' },
  { symbol: 'ACM/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$2.18700', confidence: '$0.0041' },
  { symbol: 'ADA/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.445704', confidence: '$0.00035' },
  { symbol: 'AERO/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$1.17204', confidence: '$0.0040' },
  { symbol: '1INCH/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.480100', confidence: '$0.00065' },
  { symbol: 'AAVE/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$102.974', confidence: '$0.096' },
  { symbol: 'ACM/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$2.18700', confidence: '$0.0041' },
  { symbol: 'ADA/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.445704', confidence: '$0.00035' },
  { symbol: 'AERO/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$1.17204', confidence: '$0.0040' },
  { symbol: '1INCH/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.480100', confidence: '$0.00065' },
  { symbol: 'AAVE/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$102.974', confidence: '$0.096' },
  { symbol: 'ACM/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$2.18700', confidence: '$0.0041' },
  { symbol: 'ADA/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.445704', confidence: '$0.00035' },
  { symbol: 'AERO/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$1.17204', confidence: '$0.0040' },
  { symbol: '1INCH/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.480100', confidence: '$0.00065' },
  { symbol: 'AAVE/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$102.974', confidence: '$0.096' },
  { symbol: 'ACM/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$2.18700', confidence: '$0.0041' },
  { symbol: 'ADA/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$0.445704', confidence: '$0.00035' },
  { symbol: 'AERO/USD', date: '2024-05-30', time: '8:00:00 AM UTC', price: '$1.17204', confidence: '$0.0040' },
];

const CryptoTable = () => {
  return (
    <div className="overflow-x-auto pb-16">
      <div  className='text-white text-6xl text-center py-16'> Search Benchmarks</div>
      <table className="min-w-full bg-gray-800 text-white">
        <thead>
          <tr className="w-full border ">
            <th className="px-4 py-4 border text-center">SYMBOL</th>
            <th className="px-4 py-4 border text-center">DATE</th>
            <th className="px-4 py-4 border text-center">TIME</th>
            <th className="px-4 py-4 border text-center">PRICE</th>
            <th className="px-4 py-4 border text-center">CONFIDENCE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="w-full border-t border-gray-700">
              <td className="px-4 py-4 ">{item.symbol}</td>
              <td className="px-4 py-4 ">{item.date}</td>
              <td className="px-4 py-4 ">{item.time}</td>
              <td className="px-4 py-4 ">{item.price}</td>
              <td className="px-4 py-4 ">{item.confidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
