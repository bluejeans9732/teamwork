import React, { useEffect, useState } from "react";

function ProductResevation() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [startDate, setStartDate] = useState("");
    
    const handlePress = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
            setPhoneNumber(e.target.value);
        }
    }

    useEffect(() => {
        if (phoneNumber.length === 10) {
            setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (phoneNumber.length === 13) {
            setPhoneNumber(phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [phoneNumber]);

    useEffect(() => {
        const storedStartDate = localStorage.getItem("startDate");
        const formattedStartDate = storedStartDate.replace("T", " ");
    
        const dateObj = new Date(formattedStartDate);
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", hour12: true };
        const formattedDate = dateObj.toLocaleString("ko-KR", options);
    
        setStartDate(formattedDate);
    }, []);

    const savedSelectedItems = JSON.parse(localStorage.getItem("selectedItems"));

    function handleSubmit(e) {
        e.preventDefault();
        const reservationData = {
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            time: startDate,
            item: savedSelectedItems,
            price: totalPrice,
        };
    }

    console.log(startDate)
    console.log(savedSelectedItems)

    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        let total = 0;
        savedSelectedItems.forEach(item => {
          total += item.price * item.quantity;
        });
        setTotalPrice(total);
    }, [savedSelectedItems]);

    return (
        <div className="h-full w-full overflow-y-scroll scrollbar-hide relative bg-gray-100">
            <div className="flex flex-col mx-auto bg-white ">
                <form className="flex flex-col w-line mx-auto ">

                    <div className="flex flex-col">
                        <div className="font-bold">예약자 정보</div>
                        <label htmlFor="name" className="mt-3 text-xs font-light">이름</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            required 
                            autoComplete="off"
                            className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                        />
                        {/* <label htmlFor="address" className="mt-3 text-xs font-light">주소</label>
                        <input 
                            type="text" 
                            id="address" 
                            value={address} 
                            onChange={e => setAddress(e.target.value)} 
                            required
                            autoComplete="off"
                            className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                        /> */}

                        <label htmlFor="phonenumber" className="mt-3 text-xs font-light">핸드폰 번호</label>
                        <input 
                            type="text" 
                            id="phonenumber" 
                            autoComplete="off"
                            value={phoneNumber} 
                            onChange={handlePress} 
                            className="rounded-md  mt-1 border-2 border-slate-300 w-full h-10 outline-none focus:bg-cyan-50 p-3 focus:border-blue-500"
                        />
                    </div>
                    
                    <div>
                        <div className="font-bold mt-4">예약 정보</div>
                        <div>
                            <div className="mt-3 mb-2 text-xs font-bold">예약 시간</div>
                            {startDate}
                        </div>
                        <div>
                            <div className="mt-3 mb-2 text-xs font-bold">예약 물품</div>
                            {savedSelectedItems.map((item) => (
                                <div key={item.id} className='flex flex-row mt-1'>
                                    {item.label} <p className='ml-5'>수량 : {item.quantity}개</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="mt-3 mb-2 text-xs font-bold">예상 총 금액</div>
                            {totalPrice.toLocaleString()}원
                        </div>
                        
                    </div>

                    

                    <button type="submit" className="Login_login rounded-md  mt-10 w-full h-12 bg-cyan-300 text-white text-bold" onSubmit={handleSubmit}>예약하기</button>
                </form>
            </div>
        </div>
        
    )
}

export default ProductResevation;