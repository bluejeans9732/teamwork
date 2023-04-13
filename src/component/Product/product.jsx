import React, { useState } from 'react';
import BannerCarousel from './BannerCarousel';
import PickDatePicker from  './PickDatePicker';
import ProductReview from  './ProductReview';
import DropDown2 from './DropDown2';
import Modal from './Modal';



function Product() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [open, setOpen] = useState(false);
 
    const items = [
        { id: 1, label: '엔진 오일', price: 50000 },
        { id: 2, label: '브레이크 필터', price: 94000 },
        { id: 3, label: '연료 필터', price: 100100 },
        { id: 4, label: '브레이크 오일', price: 58700 },
        { id: 5, label: '부동액', price: 54500 },
        { id: 6, label: '배터리', price: 264900 },
        { id: 7, label: '벨트', price: 52600 },
        { id: 8, label: '타이어', price: 50000 },
    ];

    const handleDropdownChange = (item) => {
        const index = selectedItems.findIndex((selectedItem) => selectedItem.id === item.id);
        if (index > -1) {
            const updatedItems = [...selectedItems];
            updatedItems[index].quantity++;
            setSelectedItems(updatedItems);
        } else {
            setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
        }
    };

    const handleRemoveItemClick = (item) => {
        const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
        setSelectedItems(updatedItems);
    };

    const handleItemIncrement = (item) => {
        const index = selectedItems.findIndex((selectedItem) => selectedItem.id === item.id);
        const updatedItems = [...selectedItems];
        updatedItems[index].quantity++;
        setSelectedItems(updatedItems);
    };

    const handleItemDecrement = (item) => {
        const index = selectedItems.findIndex((selectedItem) => selectedItem.id === item.id);
        const updatedItems = [...selectedItems];
        updatedItems[index].quantity--;
        if (updatedItems[index].quantity === 0) {
            updatedItems.splice(index, 1);
        }
        setSelectedItems(updatedItems);
    };

    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    
    return (
      <div className="h-screen overflow-y-scroll scrollbar-hide relative bg-gray-100">
        <div className="flex flex-col mx-auto bg-white w-2/5 ">
            <div>
                <div className="mx-auto w-full bg-blue-300"><BannerCarousel /></div>
                <div className="mt-4 ml-4">
                    <div className="font-bold">어디동 어디점</div>
                    <p className="mt-1 text-xs font-light w-full">경기도 어디동 어디도로 65번길 100</p>
                </div>
                
                
                <div className="mt-10 mx-auto w-3/5 h-full">
                    <div className="flex flex-col  ">
                        <div className="w-40 h-32 mx-auto">
                            <img src="../../image/carcenterOner.jpg" className="rounded-full " />
                        </div>
                        <div className="w-full h-full ml-1 font-bold">
                            <p>초보 운전자들을 위한 카센터</p>
                            <p className="mt-1 text-xs font-light">저희 한성카센터는 차량에 대해 잘 알지 못하는 초보 운전자들이라도 가볍게 방문할 수 있는 정비소입니다.
                                또 10여년 경력의 베테랑 정비사가 모든 문제를 세심히 진단하고 빠른 해결책을 보장하고 있습니다.
                                꼭 차에 문제가 없더라도 차량관리에 대한 모든 노하우를 친절하게 알려드립니다.</p>
                        </div>
                    </div>
                </div>

                <p className="border-t border-slate-200 mt-6 w-line mx-auto"></p>
                
                <div className="mt-4 ml-4">
                    <h1 className="font-bold">가격정보</h1>
                    <div className="mt-4 ml-2">
                        <div className="mt-1">엔진 오일 : 50,000원</div>
                        <div className="mt-1">브레이크 필터  : 94,000원</div>
                        <div className="mt-1">연료 필터 : 100,100원</div>
                        <div className="mt-1">브레이크 오일 : 58,700원</div>
                        <div className="mt-1">부동액 : 54,500원</div>
                        <div className="mt-1">배터리 : 264,900원</div>
                        <div className="mt-1">벨트 : 52,600원</div>
                        <div className="mt-1">타이어 : 50,000원</div>
                        
                    </div>
                </div>
                <div className="mt-6 ml-4">
                    <h1 className="font-bold">매장 정보</h1>
                    <div className="mt-4 ml-2">
                        <div className="mt-1">오픈시간 : 9 ~ 18시</div>
                        <div className="mt-1">예약은 한시간 단위로 열립니다.</div>
                    </div>
                    
                </div>

                <p className="border-t border-slate-200 mt-6 w-line mx-auto"></p>
                
                <div className='flex justify-between'>
                    <h1 className="font-bold mt-6 ml-4">베스트 리뷰</h1>
                    <h1 className="font-bold mt-6 mr-8">전체보기</h1>
                </div>
                
                <div className="mt-4 ml-4 mr-4 flex">
                    <ProductReview />
                    <ProductReview />
                </div>

                <p className="border-t border-slate-400 mt-10 w-line mx-auto"></p>

                <h1 className="font-bold mt-6 ml-4">예약 선택</h1>
                <div className="w-line mx-auto h-full mt-4 ml-4">
                    <p className="text-xs mt-2 font-semibold">예약 날짜</p>
                    <div className="mt-1 w-[240px]"><PickDatePicker/></div>
                    <p className="text-xs mt-4 font-semibold">예약 물품</p>
                    <div className="mt-1 ">
                        <div>
                            <DropDown2
                                title="선택하세요"
                                items={items}
                                onDropdownChange={handleDropdownChange}
                                
                            />
                            <p className="text-xs mt-4 font-bold">선택하신 목록</p>

                            <ul className='mt-2 w-[400px]'>
                                {selectedItems.map((item) => (
                                <li key={item.id} className='flex flex-row mt-2'>
                                    
                                    <div className='flex justify-between'>
                                        <div>{item.label}</div>
                                        <div className='flex'>
                                            <p className='ml-5'> 수량
                                            <button  className='ml-3 mr-2 w-5 bg-red-400 text-white rounded' onClick={() => handleItemDecrement(item)}>-</button>
                                            {item.quantity}</p> 
                                            <button  className='ml-3 w-5 bg-blue-400 text-white rounded' onClick={() => handleItemIncrement(item)}>+</button>
                                            <button  className='ml-3 w-20 bg-blue-400 text-white rounded' onClick={() => handleRemoveItemClick(item)}>삭제</button>
                                        </div>
                                    </div>
                                   
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>          
                </div>

                <button className="bg-blue-300 w-full mt-10 p-2 text-white rounded-sm" onClick={() => setOpen(true)}>예약하기</button>
                
                <Modal open={open} onClose={() => setOpen(false)} />
                
            </div>
        </div>
      </div>
    );
  }
  
  export default Product;
  