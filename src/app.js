const express = require("express");
const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/order", orderRoutes);

module.exports = app;
