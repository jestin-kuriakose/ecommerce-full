import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:category' element={<ProductList/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route path='/register' element={user ? <Navigate to="/" /> : <Register/>}/>

      </Routes>
    </Router>
  );
}

export default App;
