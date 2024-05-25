import { title } from 'process';
import React from 'react';

const Elevate = () => {
  let productImages = [
    {
      img: 'https://images.unsplash.com/photo-1696774275179-1e6db44f4227?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Comfortable Sofa',
      price: '$ 80.99',
    },

    {
      img: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Elegant Side Table',
      price: '$ 80.99',
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1668245539958-3e6e6259c00b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Classy Padded Chair',
      price: '$ 80.99',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center mt-6 text-4xl font-semibold">
        Elevate your Living Room
      </h1>
      <div>
        {productImages.map((item) => {
          return (
            <div className="flex flex-col mt-8 items-center ">
              <img
                className="w-1/4 h-1/4 border hover:scale-105 transition-transform duration-300"
                src={item.img}
                alt=""
              />
              <div className='mt-5 text-center'>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Elevate;
