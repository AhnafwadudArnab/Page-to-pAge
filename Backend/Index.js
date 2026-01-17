const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// API route
app.post("/submit", async (req, res) => {
  const { name, email, age, city } = req.body;

  try {
    const sql =
      "INSERT INTO users (name, email, age, city) VALUES (?, ?, ?, ?)";
    await db.execute(sql, [name, email, age, city]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API route to fetch users
app.get("/users", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM users ORDER BY id DESC");
  res.json(rows);
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
