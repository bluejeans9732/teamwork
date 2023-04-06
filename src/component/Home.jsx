import React from 'react';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return (
      <div className="background">
        <div className="container w-[90%] xl:max-w-5xl z-10 absolute inset-x-1/2 translate-x-[-50%]">
          <div className="flex flex-col justify-center items-center text-white mt-6 h-screen">
            <header className="font-bold text-2xl mb-5">:다가오는_자동차: Oh! My Car :렌치:</header>
            <br></br>
            <p className="text-center leading-7">
            <br />
            새로 차를 구입하여 차에 대해 잘 모르거나, 부품 교체 등 차량 점검 시기가 다가왔음에도 점검 시기를 놓치는 고객이 많습니다.<br />
            이러한 상황에 차량 점검에 필요한 정보 제공 및 정비소 예약을 할 수 있는 플랫폼의 필요성이 증가했습니다.<br />
            OhMyCar 는 이러한 차량에 관련한 정보를 제공하고, 관련된 인터페이스를 제공하고자 합니다.
            <br /><br />
            <p className="blink">OhMyCar 가 "차량점검" 의 a-z까지 함께합니다.</p>
            </p>
            <br /><br />
            <button className="btn glass mt-5" onClick={() => navigate("/place")}>
              둘러보기
            </button>
          </div>
        </div>
        <ul className="fade-in-out">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
    );
  };
  export default Home;