import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderList from "./orderList/OrderList";
import axios from "axios";

const OrderLists = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchAllTheOrders = async () => {
      try {
        const res = await axios.get("/orders");
        setOrders(res.data.orders);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllTheOrders();
  }, []);
  console.log(orders);
  return (
    <div>
      <h1>All Orders List</h1>
      {orders &&
        orders.map((order, i) => (
          <Link to={`/order/${order._id}`} className="Link">
            <OrderList order={order} i={i} />
          </Link>
        ))}
    </div>
  );
};

export default OrderLists;
