import express from "express";
import homeRoutes from "./routes/homeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();


app.use(express.json());

// Маршрути
app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/articles", articleRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});