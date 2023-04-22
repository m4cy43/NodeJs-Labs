const express = require("express");
const dotenv = require("dotenv").config({
  path: ".env",
});
const { errorHandler } = require("./middleware/errorMiddleware");
const dbConnect = require("./config/db");
const port = process.env.PORT || 5000;
const app = express();

// MongoDB connection
dbConnect();

// Request body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ALL ROUTES
app.use("/api/v1/user", require("./routes/userRoute"));
// TODO

// LAST IN MIDDLEWARE!
// Error middleware
app.use(errorHandler);

// Port listening
app.listen(port, () => console.log(`Server started on port ${port}`));
