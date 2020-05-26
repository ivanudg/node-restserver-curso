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
    urlBD = 'mongodb+srv://ivanudg:jAG9AmaTcPsJoGrQ@cafe-udemy-wy7ck.mongodb.net/cafe';
}
process.env.URLDB = urlBD;