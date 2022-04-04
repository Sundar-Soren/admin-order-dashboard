import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./uac.scss";

const UpdationAndCreation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [customer_name, setCustomer_name] = useState("");
  const [customer_email, setCustomer_email] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [isUandCCompleted, setIsUandCCompleted] = useState(false);
  useEffect(() => {
    const fetchOrderDetails = async (orderId) => {
      try {
        const res = await axios.get(`/order/${orderId}`);
        setOrder(res.data.order);
        setCustomer_name(res.data.order.customer_name);
        setCustomer_email(res.data.order.customer_email);
        setProduct(res.data.order.product);
        setQuantity(res.data.order.quantity);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOrderDetails(orderId);
  }, [orderId]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/order/update/${orderId}`, {
        customer_name,
        customer_email,
        product,
        quantity,
      });
      setIsUandCCompleted(true);
    } catch (error) {
      console.log(error.message);
    }
    //
  };
  return (
    <div className="UpdationAndCreation">
      <div className="UpdationAndCreation_con">
        <form onSubmit={handleClick}>
          <div className="input-container">
            <label>customer_name</label>
            <input
              type="text"
              name="uname"
              value={customer_name}
              required
              onChange={(e) => setCustomer_name(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>customer_email </label>
            <input
              type="email"
              name="email"
              value={customer_email}
              required
              onChange={(e) => setCustomer_email(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>product</label>
            <select name="" id="" onChange={(e) => setProduct(e.target.value)}>
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
            </select>
          </div>
          <div className="input-container">
            <label>quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              required
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
        {isUandCCompleted && <h4>Updated Successfull</h4>}
      </div>
    </div>
  );
};

export default UpdationAndCreation;
