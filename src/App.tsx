import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import CartList from './components/CartList';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  const [toggleCart, setToggleCart] = useState(false);
  return (
    <div className='App'>
      <Navbar toggleCart={() => setToggleCart(!toggleCart)} />
      {toggleCart && <Cart toggleCart={() => setToggleCart(!toggleCart)} />}
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <ProductList />
        {/* <Cart /> */}
      </div>
    </div>
  );
}

export default App;
