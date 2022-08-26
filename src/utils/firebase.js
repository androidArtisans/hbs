const { initializeApp } = require('firebase/app')

const firebaseConfig = {
    apiKey: "AIzaSyCULqEhmjeQjICS4KeR0s2wilus4Gew9tI",
    authDomain: "trackin-a961c.firebaseapp.com",
    projectId: "trackin-a961c",
    storageBucket: "trackin-a961c.appspot.com",
    messagingSenderId: "633026803362",
    appId: "1:633026803362:web:408d721d99540ffc5d89fb",
    measurementId: "G-SZSRDHNY6T"
}

const firebaseApp = initializeApp(firebaseConfig)


module.exports = firebaseApp