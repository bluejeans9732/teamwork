import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="bg-zinc-400 text-white h-14 flex justify-between relative">
            <Link to="/">
                <div className="text-3xl ml-4 mt-4">Oh! MyCar</div>
            </Link>
            <Link to="/login">
                <div className="text-white mt-6 mr-5">로그인</div>
            </Link>
            
        </div>
    )
    
}

export default Header;