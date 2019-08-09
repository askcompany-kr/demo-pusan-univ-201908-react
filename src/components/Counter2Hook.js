import React, { useState, useEffect } from "react";


const Counter2 = () => {
    const [date, setDate] = useState(null);

    useEffect(() => {
        const onInterval = () => setDate(new Date().toISOString().slice(11, 19));
        const handle = setInterval(onInterval, 1000);
        return () => clearInterval(handle);
    }, []);
    // deps: 지정하지 않으면, Mount/Update 시에 호출
    // [date] 지정하면 : date가 변경될 때마다 호출
    // [] 지정하면, Mount시에만 호출

    return (
        <div>
            <h2>Counter2 (함수형)</h2>
            {date}
        </div>
    );
};

export default Counter2;
