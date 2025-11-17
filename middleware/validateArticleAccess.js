export default function validateArticleAccess(req, res, next) {
  const role = req.headers.role || "guest";

  if (role !== "admin") {
    return res.send("❌ У вас немає доступу до статей");
  }

  next();
}