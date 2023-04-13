import Main from './component/Main';
import LoginMain from './component/LoginMain/LoginMain';
import Login from './component/Login';
import Pwid from './component/Pwid';
import Home from './component/Home';
import Product from './component/Product/product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './component/MainLayout';
import ProductResevation from './component/Product/ProductResevation';

function App() {
  

  return (
    <BrowserRouter>
      <div className='h-screen min-h-full relative'>
        
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/main" element={<Main/>} />
              <Route path="/loginmain" element={<LoginMain />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/ProductResevation" element={<ProductResevation/>} />
            </Route>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/pwid" element={<Pwid/>} />
          </Routes>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
