import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import About from './screens/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductList from './screens/ProductList';
import store from './action/store/store';
import { Provider } from 'react-redux';
import MyCart from './screens/MyCart';
import Checkout from './screens/Checkout';
import MyOrder from './screens/MyOrder';
import MyOrderDetails from './screens/MyOrderDetails';


function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#283038';
      // showAlert('Dark mode enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert('Light mode enabled', 'success');
    }
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar title="Buyer/Seller" item1="Home" item2="About" mode={mode} onpresstogglemode={togglemode} />
          <Routes>
            {/* <Route path="/" element={<Home mode={mode}/>}/> */}
            <Route path="/">
              <Route index element={<Home mode={mode} />} />
              <Route path='/productlist'>
                <Route path="/productlist/:id" element={<ProductList mode={mode} />} />
              </Route>
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/cart">
              <Route path="/cart" element={<MyCart mode={mode} />} />
              <Route path="/cart/checkout" element={<Checkout />} />
            </Route>
            <Route path="/myorders">
              <Route path="/myorders" element={<MyOrder />} />
              <Route path="/myorders/:id" element={<MyOrderDetails />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
