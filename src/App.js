import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import { useState } from 'react';

function App() {
  const [cartItems, addCartItems] = useState(0)
  return (
    <div className="App">
      <Navbar itemCount={cartItems}/>
      <Main addCartItems={addCartItems}/>
    </div>
  );
}

export default App;
