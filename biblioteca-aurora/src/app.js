// Configuración de Express: JSON, rutas y manejo de errores
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const librosRoutes = require('./routes/libros');

const app = express();

// Middleware para parsear JSON del body
app.use(express.json());

// Rutas de la API (versionado simple: /api/*)
app.use('/api', librosRoutes);

// Manejo de rutas no encontradas (404)
app.use((req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    next(error);
});

// Middleware global de errores (debe ir al final)
app.use(errorHandler);

module.exports = app;