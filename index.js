const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(require('cors')()); // Cho phép mọi domain gọi
app.use(express.json());
app.use(express.static('public'))

// Route proxy tới ophim1
app.get('/api/phim', async (req, res) => {
  const { page = 1, country = 'trung-quoc' } = req.query;
  const targetUrl = `https://ophim1.com/v1/api/danh-sach/quoc-gia?page=${page}&slug=${country}`;

  try {
    const response = await axios.get(targetUrl);
    fs.writeFileSync('./public/'+country+'.json', JSON.stringify(response.data), 'utf8');
    res.json(response.data); // Trả về JSON sạch
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi gọi ophim API' });
  }
});

// Ví dụ route lấy chi tiết phim
app.get('/api/phim/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await axios.get(`https://ophim1.com/phim/${slug}`);
    fs.writeFileSync('./public/'+slug+'.json', JSON.stringify(result.data), 'utf8');
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: 'Không lấy được thông tin phim' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
