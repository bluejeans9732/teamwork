import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Login from './component/Login';
import Pwid from './component/Pwid';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='h-screen min-h-full pb-48'>
        <Header />
        <Routes>
          <Route path="/*" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/pwid" element={<Pwid/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
