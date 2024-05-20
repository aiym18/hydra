import React, { useState } from "react";
import logo from "..//../assets/img/header.png";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { productSearch } from "../../redux/AddProductSlise";


const Header = () => {
  const { basket} = useSelector((s) => s.addBasket);
  const {product} = useSelector((s)=>s.todo)
  const dispatch = useDispatch() 
  const [searchh,setSearchh] = useState("")
  return (
    <div id="header">
      <div className="container">
        <div className="header flex align-center justify-between py-9">
          <img src={logo} alt="img" />
          <div className="header-nacv flex text-white  gap-9 text-[24px] ">
            <Link to={"/"}>HOME</Link>
            <Link to={"/man"}>MAN</Link>
            <Link to={"/woman "}>WOMAN</Link>
            <Link to={"/kids"}>KIDS</Link>
            <Link to={"/sale"}>SALE</Link>
          </div>
          <div className="header-icons flex gap-8 text-white text-[30px]">
            <div className="">
              <input
              value={searchh}
              onChange={(e)=>setSearchh(e.target.value)}
                className="bg-transparent text-[24px]"
                type="text"
                placeholder="Search"
              />
            </div>
            <Link to={"/search"}
          
            onClick={()=>{
              dispatch(productSearch(searchh))
              setSearchh('') 
            }}>
              <GoSearch />
            </Link>
            <Link to={"/basket"} className="bas text-[38px]  relative ">
              <MdOutlineShoppingBag />
              <h1 className="flex absolute text-[13px] right-3 text-base top-3">
                {basket.length}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
