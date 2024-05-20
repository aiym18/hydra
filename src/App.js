import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './companents/Header';
import Home from './companents/Home';
import AddProduct from './companents/AddProduct';
import BuyNow from './companents/BuyNow';
import Basket from './companents/Basket';
import Man from './companents/Man';
import Woman from './companents/Woman';
import Kids from './companents/Kids';
import ProductDetalis from './companents/ProductDetalis';
import Search from './companents/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/buynow' element={<BuyNow/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/man' element={<Man/>}/>
        <Route path='/woman' element={<Woman/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/productdetalis' element={<ProductDetalis/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
