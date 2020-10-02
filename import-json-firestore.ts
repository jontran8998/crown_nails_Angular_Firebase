
const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// const API_KEY = process.env.API_KEY;
// const AUTH_DOMAIN = process.env.PROJECT_ID;
// const PROJECT_ID = process.env.PROJECT_ID;

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    // apiKey: 'AIzaSyDZzZgoSDUAsVTbC3_AIKMFYV3EuoIsqyA',
    apiKey: 'AIzaSyDZzZgoSDUAsVTbC3_AIKMFYV3EuoIsqyA',
    authDomain: 'crownnailsandspa-e8452.firebaseapp.com',
    projectId: 'crownnailsandspa-e8452'
});

// console.log( process.env.PROJECT_ID);

let db = firebase.firestore();

let items = [
    {name: 'Acrylic Full Set', category: 'Crown Nails', price: 49},
    {name: 'Acrylic Fill', category: 'Crown Nails', price: 44},
    {name: 'Gel Full Set', category: 'Crown Nails', price: 63},
    {name: 'Gel Fill', category: 'Crown Nails', price: 58},
    {name: 'Dip Powder Full Set', category: 'Crown Nails', price: 43},
    {name: 'Dip Powder Full Set', category: 'Crown Nails', price: 48, description: 'With extension nails'},
    {name: 'Acrylic Ombre Full Set', category: 'Crown Nails', price: 68},
    {name: 'Acrylic Ombre Fill', category: 'Crown Nails', price: 63},
    {name: 'Gel Removal', category: 'Crown Nails', price: 18},
    {name: 'Long Nails Extension (> 28mm) Extra', category: 'Crown Nails', price: 8},
    {name: 'Long Nails Extension (> 35mm) Extra', category: 'Crown Nails', price: 13},
    {name: 'Regular Manicure', category: 'Manicure', price: 21},
    {name: 'Shellac Manicure', category: 'Manicure', price: 31},
    {name: 'Shellac Polish', category: 'Manicure', price: 25, description: 'With Nails Cut and File'},
    {name: 'Regular Polish', category: 'Manicure', price: 15, description: 'With Nails Cut and File'},
    {name: 'Shellac Remove', category: 'Manicure', price: 13},
    {name: 'Finger Nails Cut', category: 'Manicure', price: 13},
    {name: 'Nail Art (2 Nails)', category: 'Manicure', price: '8+'},
    {name: 'Regular Pedicure', category: 'Pedicure', price: 29},
    {name: 'Crown Pedicure', category: 'Pedicure', price: 63, description: 'Scrub + Mineral Mask + Hot Stones + Paraffin $15'},
    {name: 'Deluxe Pedicure', category: 'Pedicure', price: 48, description: 'Scrub $6 + Mineral Mask $8 + Hot Stones $5'},
    {name: 'Shellac Pedicure', category: 'Pedicure', price: 39},
    {name: 'Toe Care', category: 'Pedicure', price: 23},
    {name: 'Regular Polish', category: 'Pedicure', price: 18, description: 'With Nails Cut and File'},
    {name: 'Shellac Polish', category: 'Pedicure', price: 28, description: 'With Nails Cut and File'},
    {name: 'Shellac Removal', category: 'Pedicure', price: 13},
    {name: 'Toe Nails Cut', category: 'Pedicure', price: 13},
    {name: 'Eyebrows', category: 'Waxing', price: 15},
    {name: 'Upper Lips', category: 'Waxing', price: 11},
    {name: 'Chin', category: 'Waxing', price: 15},
    {name: 'Toes/Fingers', category: 'Waxing', price: 15},
    {name: 'Sideburn and Neck', category: 'Waxing', price: 23},
    {name: 'Full Face', category: 'Waxing', price: 42},
    {name: 'Under Arm', category: 'Waxing', price: 19},
    {name: 'Full Arm', category: 'Waxing', price: 38},
    {name: 'Haft Arm', category: 'Waxing', price: 28},
    {name: 'Full Leg', category: 'Waxing', price: 58},
    {name: 'Haft Leg', category: 'Waxing', price: 38},
    {name: 'Brazillian', category: 'Waxing', price: 57},
    {name: 'Bikini', category: 'Waxing', price: 35},
    {name: 'Back / Chest', category: 'Waxing', price: 48},
    {name: 'Eyelash Extension Set', category: 'Eyelash', price: 103},
    {name: 'Eyelash Extension Fill', category: 'Eyelash', price: '73+'},
    {name: 'Manicure + Free Desgin', category: 'Kids', price: 17},
    {name: 'Pedicure + Free Desgin', category: 'Kids', price: 21},
    {name: 'Regular (Manicure & Pedicure)', category: 'Mani+Pedi', price: 45},
    {name: 'Shellac (Manicure & Pedicure)', category: 'Mani+Pedi', price: 65},
 ];

items.forEach(obj => {
    db.collection('items').add({
        // id: obj.id,
        name: obj.name,
        category: obj.category,
        price: obj.price,
        description: obj.description ? obj.description : null,
    }).then(docRef => {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
        console.error('Error adding document: ', error);
    });
});
