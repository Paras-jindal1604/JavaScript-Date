
//? Date object in JS - 

const d = new Date();
console.log(d);
// it display date using time zones.

console.log(typeof d);
// the date is an "object" as it is created using new keyword.

//* Various date methods - 

console.log(d.toString());        
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleString());
// these methods show date in different formats.

// the date object get date and time from "system clock".
// if we change the date-time of our system then its output is also changed.



//^ NOTE ->  JavaScript Stores Dates as Milliseconds
//           JavaScript stores dates as number of milliseconds since January 01, 1970.
//           Zero time is January 01, 1970 00:00:00 UTC.
//           One day (24 hours) is 86 400 000 milliseconds.

//^ JS uses milliseconds because it gives in depth knowledge of date and time of a particular action.

let dt = new Date(1000);
console.log(dt);


//* .get methods - to get values of date/time for date object.

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());

// The days and months are stored as indexes in js date.

// Sun, Mon, Tue, Wed, Thu, Fri, Sat
//   0,   1,   2,   3,   4,   5,   6

// Jan, Feb, Mar, Apr, May, June, July, Aug, Sep, Oct, Nov, Dec
//   0,   1,   2,   3,   4,    5,    6,   7,   8,   9,  10,  11

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

console.log(d.getTime());
// it returns the number of milliseconds passed since 1 Jan 1970. 

// we can also get the no. of milliseconds using Date.now()
const now = Date.now();
console.log(now);




//^ let dt = new Date(1000);  we can give many values here -

let newdt = new Date("2020-03-17");
console.log(newdt);
console.log(newdt.toDateString());
// when we give date as string then month index start from 1 (jan = 1, feb = 2....)

let newdt2 = new Date(2020,4,11);
console.log(newdt2);
console.log(newdt2.toDateString());
// when we give date as number then month index start from 0 ( jan = 0, feb = 1....)
// here 4 is passed so it represent may
// dont pass value in number format as 01/02/03/04 it will give error. index is passed as 1/2/3/4


// we can also follow 7 values format where starting two values are compulsory.
// year / date / month / hour / minute / second / millisecond

let newdt3 = new Date(2020,8,22,10,55,40,20);
console.log(newdt3);
console.log(newdt3.toDateString());







//*  .set() methods  -  to set date/time values for date object.

const a = new Date();
a.setDate(3);
a.setMonth(4);
a.setFullYear(2020);
a.setHours(2);
a.setMinutes(30);
a.setSeconds(8);
a.setMilliseconds(9);
console.log(a);
console.log(a.toDateString());




