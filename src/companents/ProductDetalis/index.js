import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../../redux/AddToBasketSlise';

const ProductDetalis = () => {
    const {detalis,basket}=useSelector((s)=>s.todo)
    const dispatch =useDispatch()
    return (
        <div className='container'>
             <div className=" flex  gap-[100px] items-center">
                <img className='w-[450px]' src={detalis.url} alt="img" />
                <div className="">
                    <h1 className='text-[35px]'>{detalis.title}</h1>
                    <h1 className='text-[25px]'>${detalis.price}</h1>
                    <h1 className='text-[25px] my-6'>{detalis.category}</h1>
                    <button
                    onClick={()=>dispatch(addBasket(detalis))} 
                    type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

                </div>
             </div>
        </div>
    );
}; 

export default ProductDetalis;