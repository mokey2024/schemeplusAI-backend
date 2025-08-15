// generateImage.js
// 这是一个最简单的测试 API
// 返回固定图片 URL，先测试 Vercel 部署

export default function handler(req, res) {
  res.status(200).json({
    message: "Hello! generateImage API is working correctly.",
    imageUrl: "https://via.placeholder.com/150"
  });
}
