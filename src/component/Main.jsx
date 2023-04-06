import React from "react";
import { Link } from "react-router-dom";
import SelectedItems from './SelectedItems';

function Main() {
    return (
        <div className="h-main overflow-y-scroll scrollbar-hide relative">
            

            <Link to="/product">매장으로</Link>
        </div>
    )
    
}

export default Main;