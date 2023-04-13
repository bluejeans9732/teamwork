import React from "react";
import ListCard from "./ListCard"
import LoginMainReview from "./LoginMainReview"
import Carpicture from '../../images/carpicture2.jpg'

import data from './data.json'

function LoginMain() {
     const { challenges } = data;

     return (
          <div className="bg-gray-100">
               <div className=" mx-auto w-8/12">
                    <div className="bg-white flex flex-row w-3/4 h-[400px] mx-auto">
                         <img src={Carpicture} alt="사진" className="w-1/2 rounded"/>
                         <div className="w-full h-full flex flex-col">
                              <div className="w-3/4 mx-auto mb-4">
                                   <div className="font-normal mt-4 mb-5 flex justify-between">
                                        <h2 className="">엔진 오일</h2>
                                        <p className="text-xs">추천 교체 시기 </p>
                                   </div>
                                   
                                   <div className="bg-gray-100 mx-auto h-2.5 rounded-md flex text-center">
                                        <div className="bg-red-400 h-2.5 rounded-md w-[86%]">
                                             <span className="h-10 w-10 rounded-full border-2 border-white bg-red-400 text-white float-right -mt-4 flex items-center justify-center">86%</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="w-3/4 mx-auto mb-4">
                                   <h2 className="font-normal mt-4 mb-5">타이어 교체 시기</h2>
                                   <div className="bg-gray-100 mx-auto h-2.5 rounded-md flex text-center">
                                        <div className="bg-orange-400 h-2.5 rounded-md w-[60%]">
                                             <span className="h-10 w-10 rounded-full border-2 border-white bg-orange-400 text-white float-right -mt-4 flex items-center justify-center">60%</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="w-3/4 mx-auto mb-4">
                                   <h2 className="font-normal mt-4 mb-5">배터리</h2>
                                   <div className="bg-gray-100 mx-auto h-2.5 rounded-md flex text-center">
                                        <div className="bg-blue-400 h-2.5 rounded-md w-[40%]">
                                             <span className="h-10 w-10 rounded-full border-2 border-white bg-blue-400 text-white float-right -mt-4 flex items-center justify-center">40%</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="w-3/4 mx-auto mb-4">
                                   <h2 className="font-normal mt-4 mb-5">브레이크</h2>
                                   <div className="bg-gray-100 mx-auto h-2.5 rounded-md flex text-center">
                                        <div className="bg-lime-400 h-2.5 rounded-md w-[79%]">
                                             <span className="h-10 w-10 rounded-full border-2 border-white bg-lime-400 text-white float-right -mt-4 flex items-center justify-center">79%</span>
                                        </div>
                                   </div>
                              </div>
                              {/* {
                                   <div className="w-3/4">
                                        <h2 className="font-normal mt-4 mb-5">엔진 오일</h2>
                                        <div className="bg-gray-100 mx-auto h-2.5 rounded-md flex text-center">
                                             <div className="bg-red-400 h-2.5 rounded-md w-[${calc(user.time/6)}%]">
                                                  <span className="h-10 w-10 rounded-full border-2 border-black bg-red-400 text-white float-right -mt-4 flex items-center justify-center">${calc(user.time/6)}%</span>
                                             </div>
                                        </div>
                                   </div>
                              } */}
                         
                         </div>
                    </div>

                    <div className="mx-auto w-3/4 mt-10 mb-6">
                         <h5 className="text-base md:text-lg text-indigo-700 mb-1">베스트 매장</h5>
                    </div>

                    <div className="mx-auto w-3/4 py-12 min-h-[88vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                         
                         
                         {
                              challenges.map((challenge, i) => (
                                   <ListCard key={challenge.id} index={i} challenge={challenge} />
                              ))
                         }
                         
                    </div>


                    <div className="h-screen">
                         <section className="md:h-full flex flex-col items-center text-gray-600 w-3/4 mx-auto">
                              <div className="container flex  py-24 mx-auto">

                                   <div className="text-center ">
                                        <h5 className="text-base md:text-lg text-indigo-700 mb-1">Best Review</h5>
                                   </div>

                              </div>
                              <div className="flex flex-wrap -m-4">
                                   <LoginMainReview />
                              </div>
                         </section>
                         
                    </div>
               </div>
          </div>
          
     )
    
}

export default LoginMain;