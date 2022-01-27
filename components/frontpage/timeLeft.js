import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const difference = +new Date(`02/20/2022`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }


  return timeLeft;
};




const TimeLeft = (props) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="w-full md:w-auto mt-12 px-5">
       <div className="flex justify-center text-white text-center">
           {Object.keys(timeLeft).map((interval) => {
             return (
               <div key={`time-left-${interval}`} className="w-20 md:w-24 bg-light-100 py-3 md:py-4 mx-2">
                   <div className="text-5xl md:text-6xl font-semibold">
                       <span>
                           {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
                       </span>
                   </div>
                   <div className="opacity-75 text-xs mt-3 uppercase">
                       {interval}
                   </div>
               </div>
             )
           })}
       </div>
    </div>
  )
}

export default TimeLeft;
