import React, { useState, useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const SummaryPage = ({ setStep }) => {
  const [OrderContextData] = useContext(OrderContext);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  // 맵을 배열로
  const productArray = Array.from(OrderContextData.products);
  const productList = productArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const hasOptions = OrderContextData.options.size > 0;
  let optionsDisplay = null;

  if (hasOptions) {
    const optionsArray = Array.from(OrderContextData.options.keys());
    const optionList = optionsArray.map((key) => <li key={key}>{key}</li>);

    optionsDisplay = (
      <>
        <h2>옵션 가격 : {OrderContextData.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    );
  }

  return (
    <div>
      <h2>주문 확인</h2>
      <h2>여행 가격 : {OrderContextData.totals.products}</h2>
      <ul>{productList}</ul>
      {optionsDisplay}
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          id="confirm_checkbox"
          defaultChecked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />{" "}
        <label htmlFor="confirm_checkbox">주문 확인을 해주세요.</label>
        <br />
        <button type="submin" disabled={!checked}>
          주문확인
        </button>
        <button onClick={() => setStep(0)}>취소</button>
      </form>
    </div>
  );
};

export default SummaryPage;
