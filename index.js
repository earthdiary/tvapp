<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Xem phim - Trường Ca Hành</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #0f1115; color: #fff; font-family: 'Inter', sans-serif; }
    a { text-decoration: none; color: inherit; }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 30px;
      background-color: #14161c;
      border-bottom: 1px solid #2a2a2a;
    }
    logo {
      font-size: 40px;
      font-weight: bold;
    }
    .search-bar {
      flex: 1;
      max-width: 800px;
      height: 48px;
      margin: 0 30px;
    }
    .search-bar input {
      width: 100%;
      font-size: 33px;
      padding: 8px 16px;
      border-radius: 5px;
      border: none;
      background: #1c1f26;
      color: white;
    }
    ..user-btn {
      background: #facc15;
      color: black;
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      font-weight: bold;
      font-size: 33px;
    }


    .video-section {
      max-width: 1080px;
      margin: 20px auto;
    }
    .video-title {
      font-size: 20px;
      padding: 10px 0;
    }
    .player {
      position: relative;
      width: 100%;
      background: #000;
      border-radius: 10px;
      overflow: hidden;
    }
    .player iframe, .player video {
      width: 100%;
      height: 540px;
    }

    .info-container {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      gap: 20px;
    }
    .info-left {
      flex: 2;
    }
    .info-right {
      flex: 1;
      background: #1c1f26;
      padding: 20px;
      border-radius: 10px;
    }
    .poster {
      width: 100px;
      height: 140px;
      object-fit: cover;
      border-radius: 6px;
    }
    .ep-title {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
    }
    .episodes {
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
      gap: 10px;
    }
    .episode-btn {
      padding: 8px;
      background: #1e1f26;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.2s;
    }
    .episode-btn:hover {
      background: #facc15;
      color: black;
    }
    footer {
      margin-top: 40px;
      background: #14161c;
      text-align: center;
      padding: 20px;
      color: #888;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">RoPhim</div>
    <div class="search-bar">
      <input type="text" placeholder="Tìm kiếm phim, diễn viên...">
    </div>
    <button class="user-btn">Thành viên</button>
  </header>

  <div class="video-section">
    <div class="video-title">▶ Xem phim: Trường Ca Hành</div>
    <div class="player">
     <video id="player" autoplay controls type="application/x-mpegURL"></video>
    </div>

    <div class="info-container">
      <div class="info-left">
        <div class="ep-title">Tập phim</div>
        <div class="episodes">
          <div class="episode-btn">Tập 1</div>
          <div class="episode-btn">Tập 2</div>
          <div class="episode-btn">Tập 3</div>
          <div class="episode-btn">Tập 4</div>
          <div class="episode-btn">Tập 5</div>
          <div class="episode-btn">Tập 6</div>
          <div class="episode-btn">Tập 7</div>
          <div class="episode-btn">Tập 8</div>
          <div class="episode-btn">Tập 9</div>
          <div class="episode-btn">Tập 10</div>
          <div class="episode-btn">Tập 11</div>
          <div class="episode-btn">Tập 12</div>
          <div class="episode-btn">Tập 13</div>
          <div class="episode-btn">Tập 14</div>
          <div class="episode-btn">Tập 15</div>
          <div class="episode-btn">Tập 16</div>
          <div class="episode-btn">Tập 17</div>
          <div class="episode-btn">Tập 18</div>
          <div class="episode-btn">Tập 19</div>
          <div class="episode-btn">Tập 20</div>
        </div>
      </div>
      <div class="info-right">
        <img src="https://i.imgur.com/UQkWJ3p.jpeg" alt="Poster" class="poster">
        <h3 style="margin: 10px 0 5px;">Trường Ca Hành (2021)</h3>
        <p style="font-size: 14px; color: #ccc;">Bộ phim xoay quanh cô công chúa sống sót sau vụ thảm sát và bắt đầu hành trình trả thù, với bối cảnh thời Đường.</p>
      </div>
    </div>
  </div>

  <footer>
    RoPhim &copy; 2024 - Xem phim miễn phí chất lượng cao
  </footer>
  <script src="watch.js"></script>
</body>
</html>
