import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import { useState } from 'react';

function App() {
  const [cartCount, addCartCount] = useState(0)
  const [cartItems, addCartItems] = useState([])
  return (
    <div className="App">
      <Navbar 
      itemCount={cartCount}
      cartItems={cartItems}
      />
      <Main 
      addCartCount={addCartCount} 
      addCartItems={addCartItems}
      cartItems={cartItems}
      />
    </div>
  );
}

export default App;
