import React, { useState } from "react";
import list from '../list.json'

// dropdown  첫작품인데 일단 냅둔 상태입니다.

function DropDown() {
    const [isOpen, setIsOpen] =useState(false)

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    console.log(selectedProduct)

    return (
        <div className="realtive flex flex-col items-center w-full">
            <button onClick={() => setIsOpen((prev) => !prev)} className="bg-slate-800 text-white p-4 h-[50px] w-full flex items-center justify-between font-bold tracking-wider
            ">정비 용품</button>
            {isOpen && (
                <div className="flex flex-col bg-slate-800 text-white item-start p-2 mt-1 w-[240px]">
                    {list.map((item,i) => (
                        <div className="flex hover:bg-slate-600 cursor-pointer border-l-transparent" key={i}>
                            <h3 className="mt-1" onClick={() => handleProductClick()}>{item.product}</h3>
                        </div>
                    ))}
                    
                </div>
            )}
            
            {selectedProduct && <div>{selectedProduct}을 선택했습니다.</div>}
        </div>
       
    )
}

export default DropDown;