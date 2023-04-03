import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Pwid() {
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPassword2, setRegisterPassword2] = useState("");


    const Correct = () => {
        if(registerPassword === registerPassword2) {
            return true
        }
    };

    return (
        <div className="h-full w-full relative overflow-y-scroll scrollbar-hide flex">
            <div className="flex w-3/6"><img src="./image/carfix.jpg"/></div>
            <div className="pt-20 pl-20 mx-auto w-3/6 bg-gray-50">
                <div className="mx-auto"><h1 className="text-5xl">Oh! MyCar</h1></div>
                <div className="flex flex-col mt-40 mx-auto w-1/2">
                    <h1 className="text-4xl">회원가입</h1>
                    <p className="mt-3 text-xs font-light">가입 양식에 맞게 작성해주세요.</p>
                    <p className="mt-10">이메일</p>
                    <input type="text"
                        placeholder="ABC@email.com"
                        className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                    />
                    <p className="mt-3">비밀번호</p>
                    <input type="password"
                        placeholder="비밀번호를 입력해주세요."
                        className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                        onChange={(e) => {
                            setRegisterPassword(e.target.value);
                        }}
                        value={registerPassword}
                    />
                    <p className="mt-3">비밀번호 재확인</p>
                    <input type="password"
                        placeholder="비밀번호를 다시 입력해주세요."
                        className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                        onChange={(e) => {
                            setRegisterPassword2(e.target.value);
                        }}
                        value={registerPassword2}
                    />
                    <div className="mx-auto mt-1" onChange={Correct}>
                        {registerPassword.length < 1 ? <span>&nbsp;</span> : Correct() ? 
                        <span className="text-cyan-600">비밀번호가 같습니다</span> : <span className="text-red-600">비밀번호가 다릅니다</span>}
                    </div>
                    <p className="mt-1">닉네임</p>
                    <div className="flexmt-1 mt-2 w-full h-12 flex justify-between">
                        <input type="text"
                            placeholder="ex) 홍길동"
                            className="rounded-md border-2 border-slate-300 h-10 w-4/6 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                        />
                        <button className="rounded-md  w-36 h-10 text-white bg-sky-800">중복확인</button>
                    </div>
                    <button className="rounded-md  mt-10 border-2 border-slate-300 h-12 text-white bg-gray-400">회원가입 하기</button>
                    <div className="mx-auto mt-20 "><Link to="/login" className="ml-3 underline underline-offset-2 font-bold">로그인 페이지로 돌아가기</Link></div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Pwid;