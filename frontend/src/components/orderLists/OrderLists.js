import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OrderList from "./orderList/OrderList";

const OrderLists = () => {
  useEffect(() => {
    // const fetchAllTheOrders = async () => {
    //   try {
    //     const res = await axios.get();
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };
  }, []);
  return (
    <div>
      <h1>All Orders List</h1>
      <Link to={`/order/fjdsn`} className="Link">
        <OrderList />
      </Link>
    </div>
  );
};

export default OrderLists;
