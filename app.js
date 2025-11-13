import express from 'express';
import usersRoutes from './routes/usersRoutes.js';
import articlesRoutes from './routes/articlesRoutes.js';

const app = express();
app.use(express.json());

// --- Головний маршрут ---
app.get('/', (req, res) => {
  res.send('Get root route');
});

// --- Підключення модульних маршрутів ---
app.use('/users', usersRoutes);
app.use('/articles', articlesRoutes);

// --- Запуск сервера ---
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});