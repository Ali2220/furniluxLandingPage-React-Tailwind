import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
    <img
      className="w-full h-full object-cover"
      src="https://plus.unsplash.com/premium_photo-1683121158319-acc40c6ef3b2?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Furnilux background"
    />
    <h1 className="absolute top-1/3 w-full text-center font-semibold text-2xl sm:text-4xl px-4">
      Furnilux - Your Brand <br /> for Stylish Living
    </h1>
    <button className="absolute top-2/3 left-1/2 transform -translate-x-1/2 mt-4 sm:mt-0 border bg-gray-200 text-black border-black text-center rounded-2xl w-32 p-2 bg-transparent hover:bg-blue-500 hover:text-white">
      Shop Now
    </button>
  </div>
  
  )
}

export default Hero