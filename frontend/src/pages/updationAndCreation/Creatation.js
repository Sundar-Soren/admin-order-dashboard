import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Creatation = () => {
  const [customer_name, setCustomer_name] = useState("");
  const [customer_email, setCustomer_email] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [isUandCCompleted, setIsUandCCompleted] = useState(false);
  const [failedToC, FailedToC] = useState(false);

  const handleClickCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/order/create`, {
        customer_name,
        customer_email,
        product,
        quantity,
      });
      setIsUandCCompleted(true);
      FailedToC(false);
    } catch (error) {
      console.log(error.message);
      FailedToC(true);
    }
    //
  };
  return (
    <div className="UpdationAndCreation">
      <div className="UpdationAndCreation_con">
        <form onSubmit={handleClickCreate}>
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
              <option value="" disabled selected>
                Select Product
              </option>
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
        {isUandCCompleted && <h4>Order Created Successfull</h4>}
        {failedToC && (
          <h4>Order Created Failed || please Login if you not login</h4>
        )}
      </div>
    </div>
  );
};

export default Creatation;
