import React from "react";

function ProductReview() {
    return (
        <div className="h-72 flex justify-around mt-10">
            <div className="border-2 w-1/3 rounded-md">
                <img src="./image/people2.jpg" className="w-1/2 h-32 rounded-full mx-auto mt-2" />
                <p className="mt-2 ml-2 font-semibold">사장님이 친절해요</p>
                <p className="mt-2 ml-2 text-xs font-light mr-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi magnam placeat veniam! Fugit consectetur quae libero, dolorem nobis ullam eos corporis blanditiis ea vitae nesciunt, voluptates harum rem labore non?</p>
            </div>
            <div className="border-2 w-1/3 rounded-md">
                <img src="./image/people3.png" className="w-1/2 h-32 rounded-full mx-auto mt-2" />
                <p className="mt-2 ml-2 font-semibold">가격이 싸요</p>
                <p className="mt-2 ml-2 text-xs font-light mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero ipsum sint quaerat, quos cum quae consequuntur commodi doloremque aliquam provident ut ratione culpa corporis fugiat corrupti asperiores ab similique?</p>
            </div>
        </div>
    );
}

export default ProductReview;