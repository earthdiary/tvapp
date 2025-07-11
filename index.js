const express = require('express');
const axios = require('axios');
const sharp = require('sharp');
const pLimit = require('p-limit');

const app = express();
const PORT = process.env.PORT || 3000;

const limit = pLimit(3); // Chỉ cho phép 3 ảnh xử lý đồng thời

app.get('/image', async (req, res) => {
  const { url, width = 200 } = req.query;
  if (!url) return res.status(400).send('Thiếu URL ảnh');

  limit(async () => {
    try {
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'arraybuffer',
        timeout: 10000,
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });

      const contentType = response.headers['content-type'];

      if (!contentType || !contentType.startsWith('image')) {
        throw new Error('Không phải file ảnh');
      }

      let outputBuffer;
      try {
        outputBuffer = await sharp(response.data)
          .resize({ width: parseInt(width) })
          .jpeg({ quality: 70 })
          .toBuffer();
      } catch (err) {
        console.warn('⚠️ Không resize được ảnh, trả gốc');
        outputBuffer = response.data;
      }

      res.setHeader('Content-Type', 'image/jpeg');
      res.send(outputBuffer);

    } catch (err) {
      console.error("Lỗi tải ảnh:", err.message);
      res.status(500).send('Lỗi xử lý ảnh');
    }
  });
});
