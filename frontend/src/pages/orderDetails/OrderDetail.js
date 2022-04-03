import React from "react";
import "./orderDetails.scss";
const OrderDetail = () => {
  return (
    <div className="orderDetails">
      <div className="orderDetail_container">
        <ul>
          <li>customer_name:customer_name</li>
          <li>customer_email:customer_email</li>
          <li>product:product</li>
          <li>quantity:quantity</li>
        </ul>
      </div>
    </div>
  );
};

export default OrderDetail;
