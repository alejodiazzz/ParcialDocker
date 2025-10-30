import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


export async function openDb() {
  return open({
    filename: './database.db',
    driver: sqlite3.Database
  });
}

export async function initializeDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS peliculas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      genero TEXT NOT NULL,
      fecha TEXT NOT NULL,
      precio_alquiler REAL NOT NULL,
      numero_reproducciones INTEGER NOT NULL
    );
  `);
  console.log('Base de datos inicializada.');
}
