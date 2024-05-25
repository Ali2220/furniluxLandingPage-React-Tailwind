
import React from 'react';

const Products = () => {
  let productImages = [
    {
      img: 'https://images.unsplash.com/photo-1601647998802-5c86158216f6?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Wooden Shelf',
      price: '$ 80.99',
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1683120772181-a82af8464b62?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Stylish Bed',
      price: '$ 80.99',
    },

    {
      img: 'https://images.unsplash.com/photo-1648994517761-a35b826d5456?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Stylish Lamp',
      price: '$ 80.99',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center mt-6 text-4xl font-semibold">
        All Products
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

export default Products;
