// generateText.js
// 这是一个最简单的测试 API
// 返回固定文本，先测试 Vercel 部署是否成功

export default function handler(req, res) {
  res.status(200).json({
    message: "Hello! generateText API is working correctly."
  });
}
