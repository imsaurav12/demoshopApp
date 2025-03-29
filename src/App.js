import React from 'react';

import Products from './components/Products';
import NewProduct from './components/NewProduct';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 20,
      date: new Date(2009, 8, 7),
    },
    { 
      id: 'p2', 
      title: 'Surf Excel', 
      amount: 40, 
      date: new Date(2003, 2, 1) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 59,
      date: new Date(2024, 6, 25),
    },
    {
      id: 'p4',
      title: 'Wheel',
      amount: 120,
      date: new Date(2023, 1, 6),
    },
  ];
  return (
    <div>
      <NewProduct/>
      <Products items={products} />
    </div>
  );
}

export default App;