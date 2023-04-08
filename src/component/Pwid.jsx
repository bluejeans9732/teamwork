import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Pwid() {
    
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/; // 영어 소문자, 숫자 포함 8자 이상 비밀번호
    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=> {
        userRef.current.focus();
    },[])

    useEffect(() => {
        const result = emailRegex.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = passwordRegex.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
    }

    return (
        <div className="h-full w-full relative overflow-y-scroll scrollbar-hide flex">
            <div className="flex w-3/6"><img src="./image/carfix.jpg"/></div>
            <section className="pt-20 pl-20 mx-auto w-3/6 bg-gray-50">

                <Link to="/" className="mx-auto"><h1 className="text-5xl">Oh! MyCar</h1></Link>

                <form>
                    <div className="flex flex-col mt-20 mx-auto w-1/2">

                        <h1 className="text-4xl">회원가입</h1>
                        <p className="mt-3 text-xs font-light">가입 양식에 맞게 작성해주세요.</p>

                        <div className="mt-10">
                            <label htmlFor="useremail">이메일 주소</label>
                            <input 
                                type="email"
                                id="useremail"
                                ref={userRef}
                                autoComplete="off"
                                required
                                onChange={(e)=> setUser(e.target.value)}
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                placeholder="ABC@email.com"
                                className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                            />
                            <p id="uidnote" className={userFocus && user && !validName ? "block text-xs mt-1" : "hidden"}>
                                올바른 이메일 형식이 아닙니다.
                            </p>
                        </div>
                        
                        <div className="mt-3">
                            <label htmlFor="password">비밀번호</label>
                            <input 
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                                placeholder="비밀번호를 입력해주세요."
                                className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                                
                            />
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "block text-xs mt-1" : "hidden"}>
                                영어 소문자와 숫자 조합으로 8자리 이상 입력해주세요.
                            </p>
                        </div>
                        
                        <div className="mt-3">
                            <label htmlFor="confirm_pwd" >비밀번호 재확인</label>
                            <input 
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                                placeholder="비밀번호를 다시 입력해주세요."
                                className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                            
                            />
                            <p id="confirmnote" className={matchFocus && !validMatch ? "block text-xs mt-1 text-red-600" : "hidden"}>
                                비밀번호가 다릅니다.
                            </p>
                        </div>

                        <p className="mt-4">닉네임</p>
                        <div className="flex mt-1 w-full h-12 flex justify-between">
                            <input type="text"
                                placeholder="ex) 홍길동"
                                className="rounded-md border-2 border-slate-300 h-10 w-4/6 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                            />
                            <button className="rounded-md  w-36 h-10 text-white bg-sky-800">중복확인</button>
                        </div>

                        <button 
                            className={!validName || !validPwd || !validMatch ? "rounded-md mt-10 h-12 text-white bg-gray-400" : "rounded-md mt-10 h-12 text-white bg-blue-400"}
                            disabled={!validName || !validPwd || !validMatch ? true : false}
                            onSubmit={handleSubmit}
                        > 
                            회원가입 하기
                        </button>
                        
                        <div className="mx-auto mt-20 "><Link to="/login" className="ml-3 underline underline-offset-2 font-bold">로그인 페이지로 돌아가기</Link></div>
                        
                    </div>
                </form>
                
                
            </section>
            
        </div>
    )
}

export default Pwid;