import React, { useContext, useEffect, useState } from "react";
import "./Type.css";
import Products from "../components/Products";
import Options from "../components/Options";
import ErrorBanner from "../components/ErrorBanner";
import axios from "axios";
import OrderContext from "../context/OrderContext";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderData, updateItemCount] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:4000/${orderType}`);
      console.log(response);
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const ItemComponent = orderType === "products" ? Products : Options;
  const optionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return (
    <div>
      <h2>{orderType}</h2>
      <p>하나의 가격</p>
      <p>총 가격</p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" ? "column" : "row",
        }}
      >
        {optionItems}
      </div>
    </div>
  );
};

export default Type;
