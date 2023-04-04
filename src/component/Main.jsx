import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="h-main overflow-y-scroll scrollbar-hide relative">
            메인입니다

            <Link to="/product">매장으로</Link>
        </div>
    )
    
}

export default Main;