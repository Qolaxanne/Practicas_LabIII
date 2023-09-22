import React from 'react';

const Table = ({netIncomes}) => {
  const promedio = netIncomes.reduce((total, item) => total + item.income, 0) / netIncomes.length;
  return (
    <div style={{ textAlign: 'center', fontSize: '25px' }}>
      <table style={{ margin: '0 auto', borderSpacing: '40px 0px'}}>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Promedio de Ingreso Neto: ${promedio.toFixed(2)}</p>
    </div>
  );
}

export default Table