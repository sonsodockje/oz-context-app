import { createContext, useMemo, useState, useEffect } from "react";

export const OrderContext = createContext();

export function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    totals: 0,
  });

  const pricePerItem = {
    products: 1000,
    options: 500,
  };

  const calculateSubtotal = (orderType, orderCounts) => {
    let optionCount = 0;

    for (const count of orderCounts[orderType].values()) {
      optionCount += count;
    }

    console.log("calculateSubtotal", optionCount * pricePerItem[orderType]);
    return optionCount * pricePerItem[orderType];
  };

  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCounts);
    console.log("productsTotal", productsTotal);

    const optionsTotal = calculateSubtotal("options", orderCounts);
    console.log("optionsTotal", optionsTotal);

    const total = productsTotal + optionsTotal;
    console.log("total", total);

    setTotals({
      products: productsTotal,
      options: optionsTotal,
      totals: total,
    });

    console.log("totals", totals);
  }, [orderCounts]);

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      const newOrderCounts = { ...orderCounts };
      const orderCountMap = orderCounts[orderType];
      orderCountMap.set(itemName, parseInt(newItemCount));
      console.log("newOrderCounts :", newOrderCounts);
      setOrderCounts(newOrderCounts);
    }
    return [{ ...orderCounts, totals }, updateItemCount];
  }, [orderCounts, totals]);

  return <OrderContext.Provider value={value} {...props} />;
}
