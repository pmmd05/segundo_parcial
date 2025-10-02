// Define las rutas del API para la gestión de libros
const { Router } = require('express');
const wrap = require('../middleware/asyncWrap');
const ctrl = require('../controllers/libros');

const router = Router();

// GET /api/libros - Lista completa de libros
router.get('/libros', wrap(ctrl.listarLibros));

// GET /api/libros/:id - Obtener libro por ID
router.get('/libros/:id', wrap(ctrl.obtenerLibro));

// POST /api/libros - Crear nuevo libro
router.post('/libros', wrap(ctrl.crearLibro));

// DELETE /api/libros/:id - Eliminar libro por ID
router.delete('/libros/:id', wrap(ctrl.eliminarLibro));

module.exports = router;