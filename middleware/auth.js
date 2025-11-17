export default function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.send("⛔ Доступ заборонено. Немає токена.");
  }

  // Симуляція успішної авторизації
  next();
}