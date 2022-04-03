import React from "react";
import { Link } from "react-router-dom";
import "./orderList.css";
const OrderList = () => {
  return (
    <div className="allOrderList">
      <div className="OrderContainer">
        <div className="order_item">
          <div className="admin_order_content">
            <h4>customer_name:customer_name</h4>
            <p>customer_email:customer_email</p>
            <p>product:product</p>
            <p>quantity:quantity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
