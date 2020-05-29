//==========================
// Puerto
//==========================
process.env.PORT = process.env.PORT || 3000;

//===========================
// Entorno
//===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===========================
// Base de Datos
//===========================
let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = process.env.MONGO_URI;
}
process.env.URLDB = urlBD;

//===========================
// Vencimineto de Token
//===========================
// 60 segundos * 60 minutos * 24 horas * 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//===========================
// SEED de autentificación
//===========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo@.';

//===========================
// Google Client ID
//===========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '714212525290-u07jlmf5j3art3d3f9cu5v4qk361qa2c.apps.googleusercontent.com';