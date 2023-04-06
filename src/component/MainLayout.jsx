import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

// 헤더 푸터를 걸때만 사용할 예정이고 본문 부분에 outlet이 들어가면 표현됩니다

function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
  }
  
  export default MainLayout;