import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryWoman } from "../../redux/AddProductSlise";
import BayCart from "../BayCart";

const Woman = () => {
  const { woman } = useSelector((s) => s.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryWoman());
  }, []);
  return (
    <div id="container">
      <div className="flex flex-wrap gap-8">
        {woman.map((el) => (
          <BayCart el={el} />
        ))}
      </div>
    </div>
  );
};

export default Woman;
