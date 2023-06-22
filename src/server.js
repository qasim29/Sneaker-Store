const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./configs/mongodb");
const authRoutes = require("./routes/v1/auth.route");
const orderRoutes = require("./routes/v1/order.route");
const paymentRoutes = require("./routes/v1/payment.route");
const productRoutes = require("./routes/v1/product.route");
const sizeRoutes = require("./routes/v1/size.route");
const uploadRoutes = require("./routes/v1/upload.route");
const userRoutes = require("./routes/v1/user.route");

// const categoryRoutes = require("./routes/categoryRoutes");
// const productRoutes = require("./routes/productRoutes");
const cors = require("cors");

// Configure environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create an Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Use routes
app.use("/auth", authRoutes);
app.use("/order", orderRoutes);
app.use("/payment", paymentRoutes);
app.use("/product", productRoutes);
app.use("/size", sizeRoutes);
app.use("/upload", uploadRoutes);
app.use("/user", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the ecommerce app</h1>");
});

// Start the server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.DEV_MODE} mode on port ${PORT}`);
});
