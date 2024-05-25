import React from 'react'

const Footer = () => {
  return (
    <>

    <div className="container flex flex-wrap justify-center mt-16 w-full h-auto bg-[rgb(240,240,240)] p-4">
    <div className="m-10 w-full sm:w-1/2 md:w-1/4">
        <h1 className="text-xl mb-3 font-bold">furnilux</h1>
        <p className="text-xs text-[rgb(65,64,64)]">Designing Dreams, Crafting Comfort</p>
        <p>+00 123 123 123</p>
        <p>furnilux@businss.com</p>
        <p>123 Homested Land, Suite <br /> 456 Civil, United Interiors</p>
    </div>

    <div className="m-10 w-full sm:w-1/2 md:w-1/4">
        <h1 className="text-xl mb-3 font-bold">About Us</h1>
        <p>About us</p>
        <p>Blog</p>
        <p>Contact us</p>
        <p>Popular question</p>
    </div>

    <div className="m-10 w-full sm:w-1/2 md:w-1/4">
        <h1 className="text-xl mb-3 font-bold">What's Popular</h1>
        <p>King Size Beds</p>
        <p>Sofas</p>
        <p>Chairs</p>
        <p>Decorative Lamps</p>
    </div>

    <div className="m-10 w-full sm:w-1/2 md:w-1/4">
        <h1 className="text-xl mb-3 font-bold">Get 15% off your first order!</h1>
        <p className="text-sm text-[rgb(65,64,64)]">Subscribe to our newsletter and get a discount for  your first order! Also receive updates and more</p>
        <input className="mt-5 border rounded-3xl w-full p-2 text-center border-gray-800 text-black" type="text" placeholder="Email Address" />
        <button className="mt-2 text-white border rounded-3xl w-full bg-[rgb(34,54,55)] p-2 text-center">Subscribe</button>
    </div>
</div>

<div className="bg-[rgb(240,240,240)] text-black text-sm p-4">
    <p className="text-center">&copy; 2023 Furnilux. All Rights Reserved.</p>
</div>

    
    </>
  )
}

export default Footer
