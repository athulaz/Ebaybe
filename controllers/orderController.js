// controllers/orderController.js
const Order = require('../models/orderModel');

const placeOrder = async (req, res) => {
  try {
    const { items, totalPrice, shippingAddress, paymentMethod } = req.body;
    const userId = req.user.userId;

    if (!userId) {
      console.log("User ID missing in request");
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    console.log("Placing order for user:", userId);

    const order = new Order({
      userId,
      items,
      totalPrice,
      shippingAddress,
      paymentMethod,
      paymentStatus: 'pending',
      orderStatus: 'processing',
    });

    const savedOrder = await order.save();
    console.log("Order saved successfully:", savedOrder);
    res.status(201).json({ orderId: savedOrder._id, message: 'Order placed successfully' });
  } catch (error) {
    console.error("Error placing order:", error.message);
    res.status(500).json({ message: 'Failed to place order' });
  }
};

// controllers/orderController.js
const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    console.log("Fetching orders for user:", userId);
    const orders = await Order.find({ userId }).populate('items.productId'); // Populating product details if needed
    console.log("Orders retrieved:", orders);
    res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: 'Error fetching orders' });
  }
};


const initializePayment = (req, res) => {
  res.status(200).json({ message: 'Payment feature is currently disabled.' });
};

const verifyPayment = (req, res) => {
  res.status(200).json({ message: 'Payment verification is disabled.' });
};

module.exports = {
  placeOrder,
  getUserOrders,
  initializePayment,
  verifyPayment,
};
