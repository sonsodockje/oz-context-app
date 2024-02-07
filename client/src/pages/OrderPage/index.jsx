import React from "react";
import "./style.css";
import Type from "../../components/Type";
import Products from "../../components/Products";

const OrderPage = () => {
  return (
    <div>
      <div className="products_wrap">
        <Type orderType="products" />
      </div>
      <div className="flex">
        <div className="row">
          <Type orderType="options" />
        </div>
        <div className="row">
          <h2>total price : </h2>
          <button>주문</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
