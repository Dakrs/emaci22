import React, { useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring'


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

  const propsh2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  })

  return (
    <div className="w-full md:w-auto mt-12 px-5">
       <animated.div style={propsh2} className="flex justify-center text-white text-center">
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
       </animated.div>
    </div>
  )
}

export default TimeLeft;
