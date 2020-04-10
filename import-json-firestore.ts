
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
    {name: 'Acrylic Full Set', category: 'Gel Nails', price: 46},
    {name: 'Acrylic Fill', category: 'Gel Nails', price: 41},
    {name: 'Gel Full Set', category: 'Gel Nails', price: 60},
    {name: 'Gel Fill', category: 'Gel Nails', price: 55},
    {name: 'Dip Powder Full Set', category: 'Gel Nails', price: 45},
    {name: 'Acrylic Ombre Full Set', category: 'Gel Nails', price: 65},
    {name: 'Gel Removal', category: 'Gel Nails', price: 15},
    {name: 'Regular Manicure', category: 'Manicure', price: 18},
    {name: 'Shellac Manicure', category: 'Manicure', price: 28},
    {name: 'Shellac Polish Change', category: 'Manicure', price: 22},
    {name: 'Shellac Polish Change', category: 'Manicure', price: 22},
    {name: 'Shellac Remove', category: 'Manicure', price: 10},
    {name: 'Regular Pedicure', category: 'Pedicure', price: 26},
    {name: 'Crown Pedicure', category: 'Pedicure', price: 60},
    {name: 'Deluxe Pedicure', category: 'Pedicure', price: 45},
    {name: 'Shellac Pedicure', category: 'Pedicure', price: 36},
    {name: 'Toe Care', category: 'Pedicure', price: 20},
    {name: 'Regular Polish Change', category: 'Pedicure', price: 15},
    {name: 'Shellac Polish Change', category: 'Pedicure', price: 25},
    {name: 'Shellac Removal', category: 'Pedicure', price: 10},
    {name: 'Eyebrows', category: 'Waxing', price: 12},
    {name: 'Upper Lips', category: 'Waxing', price: 8},
    {name: 'Chin', category: 'Waxing', price: 12},
    {name: 'Toes/Fingers', category: 'Waxing', price: 12},
    {name: 'Sideburn and Neck', category: 'Waxing', price: 20},
    {name: 'Full Face', category: 'Waxing', price: 39},
    {name: 'Under Arm', category: 'Waxing', price: 16},
    {name: 'Full Arm', category: 'Waxing', price: 35},
    {name: 'Haft Arm', category: 'Waxing', price: 25},
    {name: 'Full Leg', category: 'Waxing', price: 55},
    {name: 'Haft Leg', category: 'Waxing', price: 35},
    {name: 'Brazillian', category: 'Waxing', price: 54},
    {name: 'Bikini', category: 'Waxing', price: 32},
    {name: 'Back / Chest', category: 'Waxing', price: 45},
    {name: 'Eyelash Extension Set', category: 'Eyelash', price: 100},
    {name: 'Eyelash Extension Fill', category: 'Eyelash', price: 70},
    {name: 'Manicure + Free Desgin', category: 'Kids', price: 14},
    {name: 'Pedicure + Free Desgin', category: 'Kids', price: 18},
    {name: 'Regular (Manicure & Pedicure)', category: 'Mani+Pedi', price: 42},
    {name: 'Shellac (Manicure & Pedicure)', category: 'Mani+Pedi', price: 62},
 ];

items.forEach(obj => {
    db.collection('items').add({
        // id: obj.id,
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
