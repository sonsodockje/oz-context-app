import { createContext, useMemo, useState } from "react";

const OrderContext = createContext();

export function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    product: new Map(),
    option: new Map(),
  });

  const [totals, setTotals] = useState({
    product: 0,
    option: 0,
    total: 0,
  });
  const pricePerItem = {
    products: 1000,
    option: 500,
  };
  function calculateSubtotal(orderType, orderCounts) {
    let optionCount = 0;
    for (const count of orderCounts[orderType].value()) {
      optionCount += count;
      console.log(count);
    }
    return optionCount * pricePerItem[orderType];
  }

  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCounts);
    const optionsTotal = calculateSubtotal("options", orderCounts);
    const total = productsTotal + optionsTotal;
    setTotals({
      product: productsTotal,
      option: optionsTotal,
      total: total,
    });
  }, [orderCounts]);

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      const newOrderCounts = { ...orderCounts };
      const orderCountsmap = orderCounts[orderType];

      orderCountsmap.set(itemName, parseInt(newOrderCounts));
      setOrderCounts(newOrderCounts);
    }

    return [{ ...orderCounts, totals }, updateItemCount];
  }, [orderCounts, totals]);

  return <OrderContext.Provider value={value} {...props} />;
}
