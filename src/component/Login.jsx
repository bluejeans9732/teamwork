import { handler } from "daisyui";
import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(()=> {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('');
        setPwd('');
    }

    return (
        <div className="h-full w-full relative overflow-y-scroll scrollbar-hide flex">
            <div className="flex w-3/6"><img src="./image/carfix.jpg"/></div>
            <div className=" pt-20 pl-20 mx-auto w-3/6 bg-gray-50">

                <Link to="/" className="mx-auto"><h1 className="text-5xl">Oh! MyCar</h1></Link>

                <section className="flex flex-col mt-20 mx-auto w-1/2">
                    <form action="">

                        <h1 className="text-4xl">로그인</h1>
                        <p className="mt-3 text-xs font-light">회원정보를 입력해주세요.</p>

                        <div className="mt-10">
                            <label htmlFor="useremail" >이메일 주소</label>
                            <input 
                                type="email"
                                id="useremail"
                                placeholder="ABC@email.com"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e)=> setUser(e.target.value)}
                                value={user}
                                required
                                className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                            />
                        </div>
                        
                        <div className="mt-3">
                            <label htmlFor="password">비밀번호</label>
                            <input 
                                type="password"
                                id="password"
                                required
                                onChange={(e)=> setPwd(e.target.value)}
                                value={pwd}
                                placeholder="비밀번호를 입력해주세요."
                                className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                            />
                        </div>
                        
                        <div>
                            <p className="mt-1 text-xs float-right font-light">비밀번호를 잊어버렸나요?</p>
                        </div>
                        <button className="Login_login rounded-md  mt-10 w-full h-12 bg-cyan-300 text-white text-bold" onSubmit={handleSubmit}>로그인</button>
                        
                    </form>
                    
                    <button className="rounded-md  mt-4 w-full h-12 bg-yellow-400 text-white">Kakao로 로그인</button>
                    
                    <div className="mx-auto mt-20">아직 계정이 없다면?<Link to="/pwid" className="ml-3 underline underline-offset-2 font-bold">회원가입</Link></div>
                </section>
            </div>
            
        </div>
    )
}

export default Login;