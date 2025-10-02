// Controladores que implementan la lógica de negocio para libros
const librosData = require('../data/librosData');

// GET /api/libros - Devuelve todos los libros
async function listarLibros(req, res) {
    try {
        const libros = librosData.obtenerTodos();
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la lista de libros' });
    }
}

// GET /api/libros/:id - Devuelve un libro por ID
async function obtenerLibro(req, res) {
    const { id } = req.params;
    
    // Validación: verificar formato UUID básico
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(id)) {
        return res.status(400).json({ error: 'Id inválido. Debe ser un UUID válido' });
    }
    
    try {
        const libro = librosData.buscarPorId(id);
        
        if (!libro) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
}

// POST /api/libros - Crea un nuevo libro
async function crearLibro(req, res) {
    const { title, author, year } = req.body;
    
    // Validación: campos obligatorios
    if (!title || !author) {
        return res.status(400).json({ 
            error: 'Faltan campos obligatorios. Se requieren: title y author' 
        });
    }
    
    // Validación: tipos de datos
    if (typeof title !== 'string' || typeof author !== 'string') {
        return res.status(400).json({ 
            error: 'Datos inválidos. title y author deben ser cadenas de texto' 
        });
    }
    
    // Validación: year debe ser número si se proporciona
    if (year !== undefined && year !== null) {
        if (!Number.isInteger(year)) {
            return res.status(400).json({ 
                error: 'Datos inválidos. year debe ser un número entero' 
            });
        }
    }
    
    try {
        // Verificar duplicado (opcional según requerimientos)
        if (year && librosData.existeDuplicado(title, year)) {
            return res.status(409).json({ 
                error: 'Ya existe un libro con el mismo título y año' 
            });
        }
        
        const nuevoLibro = librosData.agregarLibro({ title, author, year });
        res.status(201).json(nuevoLibro);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el libro' });
    }
}

// DELETE /api/libros/:id - Elimina un libro por ID
async function eliminarLibro(req, res) {
    const { id } = req.params;
    
    // Validación: verificar formato UUID básico
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(id)) {
        return res.status(400).json({ error: 'Id inválido. Debe ser un UUID válido' });
    }
    
    try {
        const libroEliminado = librosData.eliminarLibro(id);
        
        if (!libroEliminado) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }
        
        res.status(200).json({ 
            message: 'Libro eliminado correctamente',
            libro: libroEliminado 
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro' });
    }
}

module.exports = {
    listarLibros,
    obtenerLibro,
    crearLibro,
    eliminarLibro
};
