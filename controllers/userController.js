export function getUsers(req, res) {
  res.send("Список користувачів (авторизація + валідація працюють).");
}

export function getUser(req, res) {
  const { userId } = req.params;
  res.send(`Користувач ID: ${userId}`);
}