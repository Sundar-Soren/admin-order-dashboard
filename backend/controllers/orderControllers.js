const Order = require("../models/orderModel");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    return res.status(200).json({
      orders,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getASingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(200).json({
        message: "No order found",
      });
    }
    return res.status(200).json({
      order,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

exports.createNewOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    return res.status(200).json({
      order,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json({
      updatedOrder,
    });
  } catch (error) {
    return res.status(501).json({
      error: error.message,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Order deleted",
    });
  } catch (error) {
    return res.status(501).json({
      error: error.message,
    });
  }
};
