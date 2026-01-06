const { Client } = require("pg");

const config = {
  host: "127.0.0.1",
  port: 5433,
  user: "postgres",
  password: "password",
  database: "mydb",
};

async function testConnection() {
  const client = new Client(config);
  try {
    console.log("Attempting to connect with:", config);
    await client.connect();
    console.log("Successfully connected to PostgreSQL");
    const res = await client.query("SELECT current_database(), current_user");
    console.log("Current db/user:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("Connection failed:", err.message);
    if (err.code) console.error("Error code:", err.code);
    process.exit(1);
  }
}

testConnection();
