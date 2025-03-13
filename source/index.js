const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const accountRouter = require("../routes/accountRoute");
const coffeeRoutes = require("../routes/coffeeRoutes");
const favouriteRoutes = require("../routes/favouriteRoutes");
const postRoute = require("../routes/postRoute");
const reviewRoute = require("../routes/reviewRoute");
const userRoute = require("../routes/userRoute");


const app = express();

app.use(express.json());


app.use("/account", accountRouter);
app.use("/coffee", coffeeRoutes);
app.use("/favourite", favouriteRoutes);
app.use("/post", postRoute);
app.use("/review", reviewRoute);
app.use("/user", userRoute);

if (require.main === module) {
    app.listen(3000, async () => {
        console.log("Server started");
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                ssl: true,
                retryWrites: true
            });
            console.log("Database connected");
        } catch (error) {
            console.error("Database connection error:", error);
        }
    });
}

module.exports = app;
