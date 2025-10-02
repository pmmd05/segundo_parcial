// Punto de entrada: carga datos y levanta el servidor HTTP
require('dotenv').config();
const app = require('./app');
const { cargarLibros } = require('./data/librosData');

const port = Number(process.env.PORT || 3000);

// Inicializar la aplicación
(async () => {
    try {
        // Cargar libros desde el JSON
        cargarLibros();
        
        // Levantar servidor
        app.listen(port, () => {
            console.log(`🚀 Biblioteca Aurora API corriendo en http://localhost:${port}`);
            console.log(`📚 Endpoints disponibles:`);
            console.log(`   GET    /api/libros       - Lista todos los libros`);
            console.log(`   GET    /api/libros/:id   - Obtiene un libro por ID`);
            console.log(`   POST   /api/libros       - Crea un nuevo libro`);
            console.log(`   DELETE /api/libros/:id   - Elimina un libro por ID`);
        });
    } catch (error) {
        console.error('❌ Error al iniciar la aplicación:', error.message);
        process.exit(1);
    }
})();