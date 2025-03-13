const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const accountRouter = require("../routes/accountRoute");
const coffeeRoutes = require("../routes/coffeeRoutes");
const favouriteRoutes = require("../routes/favouriteRoutes");
const postRoute = require("../routes/postRoute");
const reviewRoute = require("../routes/reviewRoute");
const userRoute = require("../routes/userRoute");
const commentsRoute = require("../routes/commentRoute")





const app = express();

app.use(express.json());


app.use("/comment", commentsRoute)
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
            await mongoose.connect('mongodb+srv://jackvassallo01:Xd39FxnSMQETljKV@cluster0.h2v5a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
                ssl: true
            });
            console.log("Database connected");
        } catch (error) {
            console.error("Database connection error:", error);
        }
    });
}

module.exports = app;
