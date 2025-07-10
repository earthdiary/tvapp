// index.js
const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  res.send("🟢 Proxy server is running.");
});

app.get("/proxy", async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send("Missing 'url' query param.");

  try {
    const stream = await axios.get(targetUrl, {
      responseType: "stream",
      headers: {
        // Gửi User-Agent giả nếu cần
        "User-Agent":
          "Mozilla/5.0 (SmartTV; Linux; Tizen 6.5) AppleWebKit/537.36 Chrome/90.0.4430.217",
      },
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", stream.headers["content-type"]);
    stream.data.pipe(res);
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).send("Proxy error: " + err.message);
  }
});

// For platforms like Vercel / Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});