import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import React, { useState, forwardRef} from 'react';
import DatePicker from "react-datepicker";
import './practice.css';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

// product에 들어가는 달력 날짜 함수입니다 + 시간 합쳤습니다.

function PickDatePicker () {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 9)
    );
    
    localStorage.setItem("startDate", JSON.stringify(startDate));

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        const result = currentDate.getTime() < selectedDate.getTime();

        return result;
    };

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
          {value}
        </button>
    ));
    
    return (
        <DatePicker
            locale={ko}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM월 dd일 HH시"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            timeCaption="time"
            minTime={setHours(setMinutes(new Date(), 0), 9)}
            maxTime={setHours(setMinutes(new Date(), 0), 17)}
            customInput={<ExampleCustomInput />}
            minDate={new Date()}
            filterTime={filterPassedTime}
            filterDate={date=>date.getDay() != 6 && date.getDay() != 0 }
            
        />
    ) 
} 

export default PickDatePicker;