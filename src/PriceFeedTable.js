import React from 'react';
import './PriceFeedTable.css';

const PriceFeedTable = () => {
  const data = [
    { name: 'BORG/USD', type: 'Crypto', updated: 'Coming Soon', price: '', confidence: '', hour: '', day: '', week: '', trend: '' },
    { name: 'BSOL/USD', type: 'Crypto', updated: '2s ago', price: '$191.996', confidence: '±$0.278', hour: '▲ 0.39%', day: '▲ 1.23%', week: '▲ 1.79%', trend: 'trending' },
    { name: 'BTC/USD', type: 'Crypto', updated: '<2s ago', price: '$68,778.69', confidence: '±$37.305', hour: '▲ 0.43%', day: '▲ 0.78%', week: '▲ 1.74%', trend: 'trending' },
    { name: 'C98/USD', type: 'Crypto', updated: '<2s ago', price: '$0.261850', confidence: '±$0.00045', hour: '▲ 0.83%', day: '▲ 0.02%', week: '▲ 3.56%', trend: 'trending' },
    { name: 'COIN/USD', type: 'Equity', updated: '>1m ago', price: '$234.745', confidence: '±$0.780', hour: '0.00%', day: '▼ 0.86%', week: '▲ 7.18%', trend: 'trending' },
    { name: 'DAI/USD', type: 'Crypto', updated: '3s ago', price: '$0.999511', confidence: '±$0.0016', hour: '▲ 0.02%', day: '▲ 0.05%', week: '▼ 0.01%', trend: 'trending' },
  ];

  return (
    <table className="price-feed-table">
      <thead>
        <tr>
          <th>Price Feed</th>
          <th>Last Updated</th>
          <th>Price</th>
          <th>Confidence</th>
          <th>1H</th>
          <th>24H</th>
          <th>7D</th>
          <th>Last 7 Days</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.updated}</td>
            <td>{item.price}</td>
            <td>{item.confidence}</td>
            <td>{item.hour}</td>
            <td>{item.day}</td>
            <td>{item.week}</td>
            <td>{item.trend}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PriceFeedTable;
