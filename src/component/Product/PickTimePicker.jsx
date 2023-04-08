import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './practice.css';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

// 시간부분을 따로 만들어뒀는데 데이터를 건들기가 애매해서 안쓰고있습니다.

function PickTimePicker() {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 9)
    );

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        const result = currentDate.getTime() < selectedDate.getTime();

        return result;
    };

    console.log(startDate.getDay);

    return (
        <DatePicker
            locale={ko}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Time"
            dateFormat="aa h:mm"
            minTime={setHours(setMinutes(new Date(), 0), 9)}
            maxTime={setHours(setMinutes(new Date(), 0), 18)}
            filterTime={new Date().getDay = startDate.getDay ? filterPassedTime : null}
        />
    );
};

export default PickTimePicker;