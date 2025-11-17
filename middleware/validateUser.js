export default function validateUser(req, res, next) {
  const { userId } = req.params;

  if (userId && isNaN(Number(userId))) {
    return res.send("Помилка: userId має бути числом");
  }

  next();
}