// let user = {
//     name: "John",
//     age: 30,
  
//     toString() {
//       return `{name: "${this.name}", age: ${this.age}}`;
//     }
//   };
  
//   console.log(user); // {name: "John", age: 30}



  // let student = {
  //   name: 'John',
  //   age: 30,
  //   isAdmin: false,
  //   courses: ['html', 'css', 'js'],
  //   wife: null
  // };
  
  // let json = JSON.stringify(student);
  
  // console.log(typeof json); // we've got a string!
  
  // console.log(json);
  
  // let meetup = {
  //   title: "Conference",
  //   room: {
  //     number: 23,
  //     participants: ["john", "ann"]
  //   }
  // };
  
  // console.log( JSON.stringify(meetup))
  // /* The whole structure is stringified:
  // {
  //   "title":"Conference",
  //   "room":{"number":23,"participants":["john","ann"]},
  // }


  // let room = {
  //   number: 23
  // }
  // let meetup = {
  //   title: "Conference",
  //   participants: ["john", "ann"]
  // };
  
  // meetup.place = room;       // meetup references room
  // room.occupiedBy = meetup; // room references meetup
  
  // JSON.stringify(meetup); // Error: Converting circular structure to JSON


  // let room = {
  //   number: 23
  // };
  
  // let meetup = {
  //   title: "Conference",
  //   participants: [{name: "John"}, {name: "Alice"}],
  //   place: room // meetup references room
  // };
  
  // room.occupiedBy = meetup; // room references meetup
  
  // console.log( JSON.stringify(meetup, ['title', 'participants']) );
  // // {"title":"Conference","participants":[{},{}]}
  

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };

// var json=JSON.stringify(user, null, 2)
// console.log(typeof json)

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// };

// console.log( JSON.stringify(meetup) );
// /*
//   {
//     "title":"Conference",
//     "date":"2017-01-01T00:00:00.000Z",  // (1)
//     "room": {"number":23}               // (2)
//   }
// */

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };

// let meetup = {
//   title: "Conference",
//   room
// };

// console.log( JSON.stringify(room) ); // 23

// console.log( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/

// let value = JSON.parse(str, [reviver]);
// stringified array
// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);
// console.log(typeof numbers)

// console.log( numbers[3] ); // 1


// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// console.log(user.friends[1] ); // 1
// const sum=0
// for (let name=1; name<=10; name++){
//   sum=sum+name
// }
// console.log(sum)

