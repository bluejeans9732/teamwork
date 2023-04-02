import React from "react";
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="h-full relative">
            <div className="">로긴입니다</div>
            <Link to="/pwid">
                <div className="">회원가입</div>
            </Link>
            
        </div>
    )
}

export default Login;