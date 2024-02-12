import React, { useEffect, useContext, useState } from "react";
import { OrderContext } from "../../context/OrderContext";

const CompletePage = ({ setStep }) => {
  const [OrderContextData] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState(null);
  const [error, setError] = useState(null);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    orderCompleted(OrderContextData);
  }, [OrderContextData]);

  const orderCompleted = async (OrderContextData) => {
    try {
      let response = await axios.post(
        `http://localhost:5000/order`,
        OrderContextData
      );
      setOrderHistory(response.data);
      setLoding(false);
    } catch (error) {
      setError(error);
    }
  };

  const orderTable = orderHistory.map((item, key) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  if (loding) {
    return <div>loading</div>;
  } else {
    return (
      <div>
        <h2>주문성공</h2>
        <table>
          <tbody>
            <tr>
              <th>Number</th>
              <th>Price</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <button>돌아가기</button>
      </div>
    );
  }
};

export default CompletePage;
