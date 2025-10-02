// Middleware global de errores para manejar excepciones no controladas
// Solo se activa cuando hay errores inesperados del servidor
module.exports = (err, req, res, next) => {
    // Determinar código de estado (por defecto 500)
    const status = err.status || err.statusCode || 500;
    
    // Construir respuesta de error
    const respuestaError = {
        error: err.message || 'Error interno del servidor'
    };
    
    // En desarrollo, incluir stack trace para debugging
    if (process.env.NODE_ENV === 'development') {
        respuestaError.stack = err.stack;
    }
    
    // Log del error en consola
    console.error(`[ERROR ${status}] ${req.method} ${req.path}:`, err.message);
    if (process.env.NODE_ENV === 'development') {
        console.error(err.stack);
    }
    
    // Enviar respuesta al cliente
    res.status(status).json(respuestaError);
};