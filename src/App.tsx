import React from 'react';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="shop">
      <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
