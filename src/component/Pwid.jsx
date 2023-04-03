import React, { useState } from "react";

function Pwid() {
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPassword2, setRegisterPassword2] = useState("");


    const Correct = () => {
        if(registerPassword === registerPassword2) {
            return true
        }
    };

    return (
        <div className="h-main w-full relative overflow-y-scroll scrollbar-hide">
            <div className="mx-auto mt-20 h-mainheight w-mainwd border-2 border-slate-300 rounded-2xl ">
                <div className="flex flex-col mx-auto w-80">
                    <h1 className="mx-auto mt-10 text-4xl">회원가입</h1>
                    <p className="mt-10">이메일</p>
                    <input type="text"
                        className="rounded-md mx-auto mt-1 border-2 border-slate-600 w-80 h-12 outline-none focus:bg-cyan-50"
                    />
                    <p className="mt-6">비밀번호</p>
                    <input type="password"
                        className="rounded-md mx-auto mt-1 border-2 border-slate-600 w-80 h-12 outline-none"
                        onChange={(e) => {
                            setRegisterPassword(e.target.value);
                        }}
                        value={registerPassword}
                    />
                    <p className="mt-6">비밀번호 재확인</p>
                    <input type="password"
                        className="rounded-md mx-auto mt-1 border-2 border-slate-600 w-80 h-12 outline-none "
                        onChange={(e) => {
                            setRegisterPassword2(e.target.value);
                        }}
                        value={registerPassword2}
                    />
                    <div className="mx-auto mt-1" onChange={Correct}>
                        {registerPassword.length < 1 ? <span>&nbsp;</span> : Correct() ? 
                        <span className="text-cyan-600">비밀번호가 같습니다</span> : <span className="text-red-600">비밀번호가 다릅니다</span>}
                    </div>
                    <p className="mt-10">닉네임</p>
                    <div className="flex mx-auto mt-1 w-80 h-12 justify-between">
                        <input type="text"
                            className="rounded-md  border-2 border-slate-600 w-40 h-full outline-none focus:bg-cyan-50"
                        />
                        <button className="rounded-md  w-36 h-full text-white bg-sky-800">중복확인</button>
                    </div>
                    <button className="rounded-md mx-auto mt-10 w-80 h-12 text-white bg-gray-400">회원가입 하기</button>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Pwid;