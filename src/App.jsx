import Main from './component/Main';
import Login from './component/Login';
import Pwid from './component/Pwid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './component/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <div className='h-screen min-h-full'>
        
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/*" element={<Main/>} />
          </Route>
          
          <Route path="/login" element={<Login/>} />
          <Route path="/pwid" element={<Pwid/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
