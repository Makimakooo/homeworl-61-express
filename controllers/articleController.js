export function getArticles(req, res) {
  const articles = [
    { id: 1, title: "Перша стаття" },
    { id: 2, title: "Друга стаття" },
  ];

  res.render("articles/list.ejs", { articles });
}

export function getArticle(req, res) {
  const { articleId } = req.params;

  const article = { id: articleId, title: `Стаття №${articleId}`, body: "Контент статті..." };

  res.render("articles/details.ejs", { article });
}