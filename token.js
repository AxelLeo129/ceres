const firebase = require('firebase'); // Firebase
require('firebase/auth'); // SDK de Auth a firebase

const admin = require('firebase-admin');

const serviceAccount = require('./firebase.json');

const clientFire = firebase.initializeApp({
    apiKey: "AIzaSyBD1QbU2Fp2SmEKmgjyZXfVsVLbb0tVWl8",
    authDomain: "ceres-7e3af.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "ceres-7e3af.appspot.com",
});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ejemplo.firebaseio.com' // Valor de databaseURL
});

module.exports = async() => {
    // Creamos un usuario para obtener su UID
    const user = await admin.auth().createUser({
      displayName: 'José José'
    });
    // Crear un token personalizado con el UID
    const tempToken = await admin.auth().createCustomToken(user.uid);    
     // Iniciar sesión con el token anterior
    await clientFire.auth().signInWithCustomToken(tempToken);
    // Esperamos a iniciar sesión y obtenemos los datos
    const token = await clientFire.auth().currentUser.getIdToken();
    return token;
}