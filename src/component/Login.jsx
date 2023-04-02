import React from "react";
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="h-main w-full relative overflow-y-scroll scrollbar-hide">
            <div className="bg-gray-50 mx-auto mt-20 rounded-2xl border border-slate-300 h-mainheight w-mainwd">
                <div className="flex flex-col">
                    <h1 className="mx-auto mt-10 text-5xl">Oh! MyCar</h1>
                    <input type="email" placeholder="이메일 주소" 
                        className="rounded-md mx-auto mt-10 border-2 border-slate-300 w-80 h-12 outline-none focus:bg-cyan-50"
                    />
                    <input type="text" placeholder="비밀번호" 
                        className="rounded-md mx-auto mt-5 border-2 border-slate-300 w-80 h-12 outline-none"
                    />
                    <button className="Login_login rounded-md mx-auto mt-5 w-80 h-12 bg-cyan-300 text-white">로그인</button>
                    <Link to='/pwid' className="Login_Pwid rounded-md mx-auto mt-5 w-80 h-12 bg-cyan-300 text-white text-center">
                        <button className="translate-y-2.5">회원가입</button>
                    </Link>
                    <div className="mx-auto mt-5">OR</div>
                    <button className="rounded-md mx-auto mt-5 w-80 h-12 bg-gray-400 text-white">Google로 로그인</button>
                    <button className="rounded-md mx-auto mt-5 w-80 h-12 bg-green-500 text-white">Naver 로그인</button>
                    <button className="rounded-md mx-auto mt-5 w-80 h-12 text-white bg-amber-300">Kakao 로그인</button>
                </div>
            </div>
            
        </div>
    )
}

export default Login;