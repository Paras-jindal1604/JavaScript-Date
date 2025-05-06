
//? Countdown timer till Summer Olympics 2028 -

const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

const date = date2 - date1;

const days = Math.floor(date/(1000*60*60*24));
const hours = Math.floor(date/(1000*60*60)%24);
const minutes = Math.floor(date/(1000*60)%60);
const seconds = Math.floor(date/(1000)%60);


console.log(`CountDownTimer -> Days : ${days},  Hours : ${hours},  Minutes : ${minutes},  Seconds : ${seconds}`);



//* 1165.096264050926 =  days
// the 1165 days are get using .floor() and the remaining decimal value is not a full day,
//  so this value is to be converted into hours  by taking modulus from 24.

//* 2.26336000000083 = hours
// the 2 hours are get using .floor() and remaining decimal value is not a full hour,
//   so this value is to be converted into minutes by taking modulus from 60.

//* 14.410316666588187  = minutes
// the 14 minutes are get using .floor() and remaining decimal value is not a minute,
//  so this value is to be converted nto seconds by taking modulus from 60.

//* 16.574000000953674  = seconds 
// the 16 seconds are get using .floor() to eliminate decimal value of milliseconds.




