import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Products } from './Products/Products';
import { Single } from './Products/Single';
import { Shopcontextprovider } from './context/Shop-context';
import { Cart } from './cart/Cart';
import Login from './Login/Login';



function App() {
  return (
    <div className="App">
      <Shopcontextprovider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path="/products/:productId" Component={Single}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      </Shopcontextprovider>
   
    </div>
  );
}

export default App;
