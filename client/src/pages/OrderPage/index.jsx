import React, { useContext } from "react";
import "./style.css";
import Type from "../../components/Type";
import { OrderContext } from "../../context/OrderContext";

const OrderPage = ({ setStep }) => {
  const [OrderContextData] = useContext(OrderContext);

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
          <h2>total price : {OrderContextData.totals.totals}</h2>
          <button onClick={() => setStep(1)}>주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
