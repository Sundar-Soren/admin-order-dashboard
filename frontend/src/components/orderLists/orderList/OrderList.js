import React from "react";
import { Link } from "react-router-dom";
import "./orderList.css";
const OrderList = ({ order, i }) => {
  return (
    <div className="allOrderList">
      <div className="OrderContainer">
        <div className="order_item">
          <div className="admin_order_content">
            <h3>{i + 1}</h3>
            <h4>customer_name:{order.customer_name}</h4>
            <p>customer_email:{order.customer_email}</p>
            <p>product:{order.product}</p>
            <p>quantity:{order.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
