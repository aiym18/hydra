import React from "react";
import bg from "../../assets/img/bg.png";
import cross from "../../assets/img/cross.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const nav = useNavigate()
  return (
    <div
      className="home relative "
      style={{
        background: `url(${bg}) no-repeat center/cover  `,
        minHeight: "100vh",
      }}
    >
      <div className="container">
          <div className="home-text flex items-center justify-between gap-[200px] absolute bottom-10">
            <div className=" flex flex-col gap-4">
              <h2 className="text-[24px] ml-[90px]">CHOOSE COLOR : </h2>
              <img
                src={cross}
                alt="img"
                style={{
                  width: "440px",
                }}
              />
            </div>
            <div className=" flex gap-5 ">
              <button onClick={()=>nav('/addProduct')} className=" py-4 px-14 bg-white  text-black">ADD TO CART</button>
              <button onClick={()=>nav('/buynow')} className=" py-4 px-14  ">BUY NOW</button>
            </div>
            <div className=" flex flex-col gap-4">
              <h2 className="text-[24px]">INSPIRATION </h2>
              <p className="text-[11px]">
                Inspired by the design of the latest Air Jordan game shoe,
                <br /> the Jordan Jumpman 2021 helps up-and-coming players{" "}
                <br />
                level up their game.{" "}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
