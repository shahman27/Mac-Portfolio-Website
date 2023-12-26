import React, {useState, useEffect} from "react";

function Time() {
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>{date.toDateString()} {time.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Time;