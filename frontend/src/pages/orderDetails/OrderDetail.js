import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./orderDetails.scss";
const OrderDetail = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const fetchOrderDetails = async (orderId) => {
      try {
        const res = await axios.get(`/order/${orderId}`);

        setOrder(res.data.order);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOrderDetails(orderId);
  }, [orderId]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/order/delete/${orderId}`);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="orderDetails">
      <div className="orderDetail_container">
        {order && (
          <>
            <ul>
              <li>customer_name:{order.customer_name}</li>
              <li>customer_email:{order.customer_email}</li>
              <li>product:{order.product}</li>
              <li>quantity:{order.quantity}</li>
            </ul>
            <div className="activityBTN">
              <Link to={`/order/update/${orderId}`}>
                <button>Update</button>
              </Link>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
