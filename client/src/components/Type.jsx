import React, { useContext, useEffect, useState } from "react";
import "./Type.css";
import Products from "../components/Products";
import Options from "../components/Options";
import ErrorBanner from "../components/ErrorBanner";
import axios from "axios";
import { OrderContext } from "../context/OrderContext";

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [OrderContextData, updateItemCount] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:4000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const ItemComponent = orderType === "products" ? Products : Options;
  const h2 = orderType === "products" ? "Products" : "Options";

  const optionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
        updateItemCount={(itemName, newItemCount) =>
          updateItemCount(itemName, newItemCount, orderType)
        }
      />
    );
  });

  return (
    <div>
      <h2>{h2}</h2>
      <div className="both">
        <p>하나의 가격 : {OrderContextData.pricePerItem[orderType]} WON</p>
        <p>총 가격 : {OrderContextData.totals[orderType]} WON</p>
      </div>
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
