import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepages from "./pages/Homepages";
import Login from "./pages/login/Login";
import OrderDetail from "./pages/orderDetails/OrderDetail";
import Creatation from "./pages/updationAndCreation/Creatation";
import UpdationAndCreation from "./pages/updationAndCreation/UpdationAndCreation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/admin-login" element={<Login />} />
        <Route path="/order/:orderId" element={<OrderDetail />} />
        <Route
          path="/order/update/:orderId"
          element={<UpdationAndCreation />}
        />
        <Route path="/order/create" element={<Creatation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
