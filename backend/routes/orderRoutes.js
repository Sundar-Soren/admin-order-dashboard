const express = require("express");
const {
  getAllOrders,
  getASingleOrder,
  updateOrder,
  createNewOrder,
  deleteOrder,
} = require("../controllers/orderControllers");
const { isAuthenticated } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/orders", isAuthenticated, getAllOrders);
router.get("/order/:id", isAuthenticated, getASingleOrder);
router.put("/order/update/:id", isAuthenticated, updateOrder);
router.post("/order/create", isAuthenticated, createNewOrder);
router.delete("/order/delete/:id", isAuthenticated, deleteOrder);

module.exports = router;
