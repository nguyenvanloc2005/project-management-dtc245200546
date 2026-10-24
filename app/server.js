const express = require("express");
const { Pool } = require("pg");
const client = require("prom-client");

const app = express();
const port = process.env.PORT || 3000;

// Prometheus Metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

// PostgreSQL Connection Pool
const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "pm_user",
  password: process.env.DB_PASSWORD || "StrongPassword123!",
  database: process.env.DB_NAME || "pm_db",
  port: 5432,
});

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Hệ thống Quản lý Dự án (Project Management System)</h1>");
});

// Metrics Endpoint cho Prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Endpoint kiểm tra DB
app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "success", time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection error" });
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
