export function getUsers(req, res) {
  const users = [
    { id: 1, name: "Олег" },
    { id: 2, name: "Марія" },
    { id: 3, name: "Антон" },
  ];

  res.render("users/list.pug", { users });
}

export function getUser(req, res) {
  const { userId } = req.params;

  const user = { id: userId, name: `Користувач №${userId}` };

  res.render("users/details.pug", { user });
}