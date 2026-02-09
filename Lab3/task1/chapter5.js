let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

alert( 6.35.toFixed(20) );
alert( 1.35.toFixed(20) ); 
alert( (6.35 * 10).toFixed(20) );
alert( Math.round(6.35 * 10) / 10 );

function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
alert(`Read: ${readNumber()}`);

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}

function random(min, max) {
    return min + Math.random() * (max - min);
}
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );

  let newStr = str[0].toUpperCase() + str.slice(1);

  function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") ); 

  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

  function extractCurrencyValue(str) {
    return +str.slice(1);
  }

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length );

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2]();

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );

  function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  }

  function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr1 = [5, 3, 8, 1];
  
  let filtered = filterRange(arr1, 1, 4);
  
  alert( filtered ); 
  
  alert( arr1 ); 

  function filterRangeInPlace(arr2, a, b) {

    for (let i = 0; i < arr2.length; i++) {
      let val = arr2[i];
      if (val < a || val > b) {
        arr2.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr2 = [5, 3, 8, 1];
  
  filterRangeInPlace(arr2, 1, 4); 
  
  alert( arr2 );


let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

alert( arr3 );

function copySorted(arr) {
    return arr.slice().sort();
  }
  
  let arr4 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr4);
  
  alert( sorted );
  alert( arr4 );

  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code */

alert( names );

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1 ];

let users1Mapped = users1.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
users1Mapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( users1Mapped[0].id ); // 1
alert( users1Mapped[0].fullName ); 

//nexttask
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john2 = { name: "John", age: 25 };
  let pete2 = { name: "Pete", age: 30 };
  let mary2 = { name: "Mary", age: 28 };
  
  let arr5 = [ pete2, john2, mary2 ];
  
  sortByAge(arr5);
  
  // now sorted is: [john, mary, pete]
  alert(arr5[0].name); // John
  alert(arr5[1].name); // Mary
  alert(arr5[2].name);

  //nexttask
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr6 = [1, 2, 3];
  shuffle(arr6);
  alert(arr6);

  //nexttask
  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john3 = { name: "John", age: 25 };
  let pete3 = { name: "Pete", age: 30 };
  let mary3 = { name: "Mary", age: 29 };
  
  let arr7 = [ john3, pete3, mary3 ];
  
  alert( getAverageAge(arr7) );

  //nexttask
  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) );

  //nexttask
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

  //map and set
  function unique(arr) {
    return Array.from(new Set(arr));
  }

  //next
  function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr8 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr8) );

  //next
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); 

//WeakMap and WeakSet
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMessages = new WeakSet();
  
  // two messages have been read
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  // readMessages has 2 elements
  
  // ...let's read the first message again!
  readMessages.add(messages[0]);
  // readMessages still has 2 unique elements
  
  // answer: was the message[0] read?
  alert("Read message 0: " + readMessages.has(messages[0])); // true
  
  messages.shift();
  // now readMessages has 1 element (technically memory may be cleaned later)

  
  //next
  let messages1 = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  
  readMap.set(messages1[0], new Date(2017, 1, 1));
  // Date object we'll study later

  //Object.keys, values, entries
  function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650\
  // reduce loops over array of salaries,
// adding them up
// and returns the result
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
  }

  
//next
function count(obj) {
    return Object.keys(obj).length;
  }

  //Destructuring assignment

  let user = {
    name: "John",
    years: 30
  };
  
  let {name, years: age, isAdmin = false} = user;
  
  alert( name ); // John
  alert( age ); // 30
  alert( isAdmin ); // false

//next   
  function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }

  //Date and time
  
  let d1 = new Date(2012, 1, 20, 3, 12);
  alert( d1 );

  let d2 = new Date("2012-02-20T03:12");
alert( d2 );

//next
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 Jan 2014
  alert( getWeekDay(date) ); // FR

  
  //next
  function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }

  //next
  function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date1 = new Date(2015, 0, 2);
  
  alert( getDateAgo(date1, 1) ); // 1, (1 Jan 2015)
  alert( getDateAgo(date1, 2) ); // 31, (31 Dec 2014)

  

  //next
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) ); // 31
  alert( getLastDayOfMonth(2012, 1) ); // 29
  alert( getLastDayOfMonth(2013, 1) ); // 28

  //next
  function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
  
  alert( getSecondsToday() );

  //next
  function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
  }

  //next
  function formatDate(date) {
    let diff = new Date() - date; // the difference in milliseconds
  
    if (diff < 1000) { // less than 1 second
      return 'right now';
    }
  
    let sec = Math.floor(diff / 1000); // convert diff to seconds
  
    if (sec < 60) {
      return sec + ' sec. ago';
    }
  
    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
      return min + ' min. ago';
    }
  
    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component
  
    // join the components into date
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  
  alert( formatDate(new Date(new Date - 1)) ); // "right now"
  
  alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
  
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
  
  // yesterday's date like 31.12.2016 20:00
  alert( formatDate(new Date(new Date - 86400 * 1000)) );


  //JSON

  let user = {
    name: "John Smith",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(user));
  
//NEXT
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));
  
  /*
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */