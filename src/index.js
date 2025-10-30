import express from 'express';
import { initializeDb } from './db/database.js';
import peliculasRoutes from './routes/pelicula.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/peliculas', peliculasRoutes);

initializeDb().then(() => {
  console.log('Base de datos inicializada y conectada.');

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error al inicializar la base de datos:', err);
});
