import { useState } from 'react';
import './App.css';
import Cart from './Cart';
import CartList from './CartList';
import Navbar from './Navbar';
import ProductList from './ProductList';

function App() {
  const [toggleCart, setToggleCart] = useState(false);
  return (
    <div className='App'>
      <Navbar toggleCart={() => setToggleCart(!toggleCart)} />
      {toggleCart && <CartList toggleCart={() => setToggleCart(!toggleCart)} />}
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
