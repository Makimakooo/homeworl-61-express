export function getArticles(req, res) {
  res.send("Список статей (перевірка доступу працює).");
}

export function getArticle(req, res) {
  const { articleId } = req.params;
  res.send(`Стаття ID: ${articleId}`);
}