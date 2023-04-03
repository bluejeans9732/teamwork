import React from "react";
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="h-full w-full relative overflow-y-scroll scrollbar-hide flex">
            <div className="flex w-3/6"><img src="./image/carfix.jpg"/></div>
            <div className=" pt-20 pl-20 mx-auto w-3/6 bg-gray-50">
                <Link to="/" className="mx-auto"><h1 className="text-5xl">Oh! MyCar</h1></Link>
                <div className="flex flex-col mt-40 mx-auto w-1/2">
                    <h1 className="text-4xl">로그인</h1>
                    <p className="mt-3 text-xs font-light">회원정보를 입력해주세요.</p>
                    <p className="mt-10">이메일 주소</p>
                    <input type="email" 
                        placeholder="ABC@email.com"
                        className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                    />
                    <p className="mt-3">비밀번호</p>
                    <input type="text"
                        placeholder="비밀번호를 입력해주세요."
                        className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                    />
                    <div>
                        <p className="mt-1 text-xs float-right font-light">비밀번호를 잊어버렸나요?</p>
                    </div>
                    <button className="Login_login rounded-md  mt-10 w-full h-12 bg-cyan-300 text-white text-bold">로그인</button>
                    {/* <Link to='/pwid' className="rounded-md  mt-5 w-80 h-12 bg-cyan-300 text-white text-center">
                        <button className="translate-y-2.5">회원가입</button>
                    </Link> */}
                    <button className="rounded-md  mt-4 w-full h-12 bg-gray-400 text-white">Google로 로그인</button>
                    {/* <button className="rounded-md mx-auto mt-5 w-80 h-12 bg-green-500 text-white">Naver 로그인</button>
                    <button className="rounded-md mx-auto mt-5 w-80 h-12 text-white bg-amber-300">Kakao 로그인</button> */}
                    <div className="mx-auto mt-20">아직 계정이 없다면?<Link to="/pwid" className="ml-3 underline underline-offset-2 font-bold">회원가입</Link></div>
                </div>
            </div>
            
        </div>
    )
}

export default Login;