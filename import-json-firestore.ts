
const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyDZzZgoSDUAsVTbC3_AIKMFYV3EuoIsqyA',
    authDomain: 'crownnailsandspa-e8452.firebaseapp.com',
    projectId: 'crownnailsandspa-e8452'
  });

let db = firebase.firestore();

let items = [
    {
       id: 3,
       name: 'Ombree Full Set',
       category: 'Gel Nails',
       price: 8.50,
    },
    {
       id: 4,
       name: 'Ombree Fill',
       category: 'Gel Nails',
       price: 13.50,
    }
 ];

items.forEach(obj => {
    db.collection('items').add({
        id: obj.id,
        name: obj.name,
        category: obj.category,
        price: obj.price,
    }).then(docRef => {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
        console.error('Error adding document: ', error);
    });
});
