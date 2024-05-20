import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/AddProductSlise";

const AddProduct = () => {
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const dispatch = useDispatch();
  const CreateProduct = () => {
    if (
      productImg.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === ""
    ) {
      alert("arror");
    } else {
      let newProduct = {
        id: Date.now(),
        url: productImg,
        title: productName,
        price: productPrice,
        category: productCategory,
      };
      setProductImg("");
      setProductName("");
      setProductPrice("");
      return dispatch(addProduct(newProduct));
    }
  };

  return (
    <div className="container">
      <div className="  w-full flex  items-center justify-center flex-col  gap-9">
        <input
          onChange={(e) => setProductImg(e.target.value)}
          value={productImg}
          className="py-2 px-0 38 text-[24px] w-[400px] bg-transparent border-b-2 outline-none "
          type="text"
          placeholder="Product Img"
        />
        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          className="py-2 px-0 38 text-[24px] w-[400px] bg-transparent border-b-2 outline-none"
          type="text"
          placeholder="Product Name"
        />

        <div className=" flex">
          <input
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
            className="py-2 px-0 38 text-[24px] w-[400px] bg-transparent border-b-2 outline-none"
            type="text"
            placeholder="Product Price"
          />
          <select
            onChange={(e) => setProductCategory(e.target.value)}
            className="bg-transparent  ml-[-80px] outline-none"
          >
            <option value="">choose</option>
            <option value="man">MAN</option>
            <option value="woman">WOMAN</option>
            <option value="kids">KIDS</option>
          </select>
        </div>
        <button
          onClick={() => CreateProduct()}
          className=" py-2 px-10 bg-white  text-black text-[18px] rounded-lg "
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
