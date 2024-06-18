const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")
const userRoutes = require("./routes/user.js")
const listingRoutes = require("./routes/listing")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("/properties", listingRoutes)

/* MONGOOSE SETUP */
const PORT = 3001;
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
