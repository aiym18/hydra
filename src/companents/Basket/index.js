import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BasketCard from "../BasketCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTruckArrowRight } from "react-icons/fa6";

const Basket = ({ el }) => {
  const { basket } = useSelector((s) => s.addBasket);
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [modal, setModal] = useState(false);
  let totolPrice = basket.reduce((acc, el) => {
    return acc + +el.price;
  }, 0);

  const success = () => {
    toast.success("Заказ отправлен для оброботки!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  let my_id = `-1002033251992`;
  let token = `7059277346:AAHslrYBQ1uYc0eIyI4o5jG6ATk4Npwq3bY`;
  let api_url = `https://api.telegram.org/bot${token}/sendMessage`;

  // let values = `Заказ:\n;
  //   ${basket.map((el) => {
  //     return `values += ${el.url}\n
  //     values += ${el.title}\n
  //     values += ${el.price}\n`;
  //   })}`;
  const submitToTelegram = async () => {
    let obj = {
      chat_id: my_id,
      parse_model: "html",
      // text: values,
      text: `Заказ:/n
      Имя заказчика: ${userName}/n
      Адресс заказчика: ${userAddress}/n
      Номер заказчика: ${userPhoneNum}/n`,
    };
    setUserName("");
    setUserAddress("");
    setUserPhoneNum("");
    setModal(false);
    success();
    await axios.post(api_url, obj);
  };
  return (
    <div className="containet">
      <div className=" flex ">
        <div className="w-[900px] h-[700px] py-3 overflow-scroll">
          {basket.map((el) => (
            <BasketCard el={el} />
          ))}
        </div>
        <div className="flex flex-col gap-36">
          <h1 className=" text-[29px]">Totol Price:${totolPrice}</h1>
          {/* <div className="diogram my-[90px] mx-[10px] bg-white">fff</div> */}
          <div className="flex  flex-col items-center ">
            <h1 className="text-[32px]">Registr</h1>
            <div className="  w-full flex  items-center justify-center flex-col  gap-9">
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                className="py-2 px-0 38 text-[24px] w-[400px] bg-transparent border-b-2 outline-none "
                type="text"
                placeholder="Name"
              />
              <input
                onChange={(e) => setUserAddress(e.target.value)}
                value={userAddress}
                className="py-2 px-0 38 text-[24px] w-[400px] bg-transparent border-b-2 outline-none"
                type="text"
                placeholder="Address"
              />

              <div className=" flex">
                <input
                  onChange={(e) => setUserPhoneNum(e.target.value)}
                  value={userPhoneNum}
                  className="py-2 px-0 38 text-[24px] w-[400px] bg-transparent border-b-2 outline-none"
                  type="text"
                  placeholder="Number"
                />
              </div>
              <button
                disabled={userName ? false : true}
                onClick={() => setModal(true)}
                className=" py-2 px-10 bg-white  text-black text-[18px] rounded-lg "
              >
                Офорить заказ
              </button>
              {
                <div className="">
                  <div
                    className="modal"
                    style={{ display: modal ? "flex" : "none" }}
                    id="popup-modal"
                    tabindex="-1"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                  >
                    <div class="relative p-4 w-full max-w-md max-h-full">
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                          type="button"
                          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="popup-modal"
                        >
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 md:p-5 text-center">
                          <svg
                            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <FaTruckArrowRight />
                          </svg>
                          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Вы действительно хотите заказывать?
                          </h3>
                          <button
                            onClick={() => submitToTelegram()}
                            data-modal-hide="popup-modal"
                            type="button"
                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                          >
                            Да
                          </button>
                          <button
                            onClick={() => setModal(false)}
                            data-modal-hide="popup-modal"
                            type="button"
                            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >
                            Нет
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Basket;
