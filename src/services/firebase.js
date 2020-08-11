import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCeTrrOM19O5tU8FMa3hk8lpapVv5P0td4",
    authDomain: "web-known.firebaseapp.com",
    databaseURL: "https://web-known.firebaseio.com",
    projectId: "web-known",
    storageBucket: "web-known.appspot.com",
    messagingSenderId: "642906335749",
    appId: "1:642906335749:web:e5cd4809c9ac56ad590a6c",
    measurementId: "G-9TBDV95Y0K"
};
firebase.initializeApp(firebaseConfig);
let storage = firebase.storage();
// let storageRef = storage.ref();
// var imagesRef = storageRef.child('images');
// let yo = storageRef.child('image1.jpg');
// console.log("yo", yo.fullPath)
// console.log("imagesRef", imagesRef)

export default firebase;
