const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("../routes/auth.js")
const userRoutes = require("../routes/user.js")
const listingRoutes = require("../routes/listing.js")
const bookingRoutes = require("../routes/booking.js")

// 添加这行来打印 MONGO_URL
console.log("MONGO_URL:", process.env.MONGO_URL);
console.log("PORT:", process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)

app.get("/", (req, res) => res.send("Express on Vercel"));

/* MONGOOSE SETUP */
//const PORT = 3001;

const PORT = process.env.PORT || 3001;

mongoose
    .connect(process.env.MONGO_URL, {
        dbName: "Nestease",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((err) => console.log(`${err} did not connect`));

module.exports = app;
