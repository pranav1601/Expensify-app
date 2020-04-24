import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDJsFgjKk-drgXSJovdV7qPfZ-dQpi7-BM",
  authDomain: "expensify-budgetapp-74b58.firebaseapp.com",
  databaseURL: "https://expensify-budgetapp-74b58.firebaseio.com",
  projectId: "expensify-budgetapp-74b58",
  storageBucket: "expensify-budgetapp-74b58.appspot.com",
  messagingSenderId: "349305951995",
  appId: "1:349305951995:web:ff405b730ca8520206c25e"
};

firebase.initializeApp(config);

const database=firebase.database();

export {firebase,database as default};

//child removed
// database.ref().on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

// database.ref().on('child_changed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })


// database.ref().on('value',(snapshot)=>{
//   const expenses=[];
//   snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })
// database.ref().push({
//   description:'rent',
//   note:'',
//   amount:5000,
//   createdAt:0
// })




// database.ref('notes/-M5i8nTI479E3K3E4tKh').update({
//   body:'you are fit bruh'
// })


// database.ref('notes').push({
//   title:'to do',
//   body:'sleep'
// })



// const onValueChange=database.ref().on('value',(snapshot)=>{
//   const val=snapshot.val();
//   console.log(val.name+'is '+val.age+' lives in '+val.location.city);
// },(e)=>{
//   console.log('error',e);
// })

// setTimeout(()=>{
//   database.ref().off('value',onValueChange);
// },3500)

// database.ref('location').once('value').then((snapshot)=>{
//   const val=snapshot.val();
//   console.log(val);
// }).catch((e)=>{
//   console.log('error fetching',e);
// })

// database.ref().set({
//   name: 'Pranav Agarwal',
//   age: 21,
//   location:{
//     city:'Bangalore',
//     pin:560076
//   }
// }).then(()=>{
//   console.log('data is saved');
// }).catch((e)=>{
//   console.log('did not saave',e);
// });

// database.ref().update({
//   age:22,
//   'location/city':'Mumbai'
// }).then(()=>{
//   console.log('data updated');
// }).catch((e)=>{
//   console.log('could not update',e);
// })

// database.ref().remove().then(()=>{
//   console.log('data removed');
// }).catch((e)=>{
//   console.log('did not remove',e);
// })
