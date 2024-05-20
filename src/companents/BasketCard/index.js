import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDelete } from "../../redux/AddToBasketSlise";

const BasketCard = ({ el }) => {
    const {product}= useSelector((s)=>s.todo) 
       const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="basketcat flex ">
        <div className="basketcard flex  flex-col my-2 ">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={el.url}
              alt="img"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {el.title}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ${el.price}
              </h5>
              <a onClick={()=>dispatch(addDelete(el))}
                  href="#"
                  class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                >
                  Delete
                </a>
            </div>
          </a>
        </div>
        
      </div>
      
    </div>
  );
};

export default BasketCard;
