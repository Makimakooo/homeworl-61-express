export default function errorHandler(err, req, res, next) {
  console.error("GLOBAL ERROR:", err.message);
  res.status(500).send("Сталася внутрішня помилка сервера.");
}