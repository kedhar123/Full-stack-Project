const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const trayRoutes = require("./routes/trayRoutes");
require("dotenv").config();

const db = require("./config/firebase");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    credentials: false,
  })
);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "./public")));
app.use("/", trayRoutes);

// Align default port with Next.js rewrite target (http://localhost:4000)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
