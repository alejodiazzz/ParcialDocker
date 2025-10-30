import { Router } from 'express';
import {
  addPelicula,
  getPeliculas,
  getPeliculaById,
  deletePelicula,
  searchPeliculas,
  aggregatePeliculas
} from '../controllers/pelicula.controller.js';

const router = Router();

router.post('/', addPelicula);
router.get('/', getPeliculas);
router.get('/:id', getPeliculaById);
router.delete('/:id', deletePelicula);
router.get('/search', searchPeliculas);
router.get('/aggregate', aggregatePeliculas);

export default router;
