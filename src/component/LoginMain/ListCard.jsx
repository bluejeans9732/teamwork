import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function ListCard({challenge, index}) {
    const navigate = useNavigate();
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked);
    };

    return (
        <div className="bg-gray-50 shadow-lg p-5 rounded-md">
            <h2 className="text-indigo-500">
                <span className="text-indigo-300 mr-2">{challenge.name}</span>
            </h2>
            <div>
                <img src={challenge.image} className="rounded-md my-4 md:h-52 w-full" />
            </div>
            <div className="flex justify-around">
                <button className="bg-yellow-500/80 hover:bg-yellow-500/90  py-2 rounded-md text-white font-medium tracking-wider transition w-5/12" onClick={() => navigate("/product")}>상세보기</button>
                
                
                <button className={` items-center  transition rounded-md w-5/12 ml-3 text-white ${ isBookmarked ? "bg-red-500/60 hover:bg-red-500/80" : "bg-gray-500/60 hover:bg-gray-500/80" }`} onClick={() => handleBookmarkClick()}>
                    즐겨찾기
                </button>
            </div>
        </div>
    )
    
}

export default ListCard;