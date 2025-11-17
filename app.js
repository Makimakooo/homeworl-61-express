import express from "express";
import homeRoutes from "./routes/homeRoutes.js";
import usersRoutes from "./routes/userRoutes.js";
import articlesRoutes from "./routes/articleRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

import pug from "pug";
import ejs from "ejs";

const app = express();


app.set("views", "./views");
app.engine("pug", pug.__express);
app.engine("ejs", ejs.renderFile);


app.use(express.json());


app.use("/", homeRoutes);
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});