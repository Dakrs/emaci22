import React from "react";
import { useSpring, animated } from 'react-spring'

const Title = (props) => {
  const propsh1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  })

  const propsh2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  })

  return (
    <>
      <animated.h1 style={propsh1} className="w-full font-title uppercase text-4xl xxs:text-6xl sm:text-7xl font-black text-right leading-none dark:text-gray-800 text-white">
          European Master
      </animated.h1>
      <animated.h1 style={propsh1} className="w-full font-title uppercase text-4xl xxs:text-6xl sm:text-7xl font-black text-right leading-none dark:text-gray-800 text-white">
          Athletics
      </animated.h1>
      <animated.h1 style={propsh1} className="w-full font-title uppercase text-4xl xxs:text-6xl sm:text-7xl font-black text-right leading-none dark:text-gray-800 text-white">
          Championships
      </animated.h1>
      <animated.h1 style={propsh1} className="w-full font-title uppercase text-4xl xxs:text-6xl sm:text-7xl font-black text-right leading-none dark:text-gray-800 text-white">
          Indoor
      </animated.h1>
      <animated.p style={propsh2} className="w-full text-right text-white">20 - 27 February, 2022 in Braga, Portugal</animated.p>
      <animated.h1 style={propsh2} className="w-full uppercase text-2xl xxs:text-3xl sm:text-4xl font-black text-right leading-none dark:text-gray-800 text-white">
          {'Result\'s Platform'}
      </animated.h1>
    </>
  )
}

export default Title;
