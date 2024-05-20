import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import BayCart from "../BayCart";
import { sortProduct } from "../../redux/AddProductSlise";

const BuyNow = () => {
  const { product } = useSelector((s) => s.todo);
  const dispatch = useDispatch() 
  return (
    <div className="container">
      <div className="flex justify-end flex-col items-end ">
        <select 
        onChange={(e)=>dispatch(sortProduct(e.target.value))} className="bg-transparent my-3 w-[120px] mb-5">
          <option value="expensive">Expensive</option>
          <option value="cheap">Сheap</option>
        </select>
        <div className="buynow  w-full justify-between flex flex-wrap gap-24">
          {product.map((el) => <BayCart el={el}/>)}
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
