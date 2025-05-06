# 🕒 JavaScript Date Object 

This repository explores everything you need to know about working with dates in JavaScript.
From basic formats to creating a real-world countdown timer to the 2028 Olympics, it's all covered!

## 📌 Table of Contents

1. What is JavaScript Date?

2. Different Date Formats

3. Why Dates Are Stored in Milliseconds

4. Get and Set Methods

5. Olympics 2028 Countdown Timer


### 📅 What is JavaScript Date?

The JavaScript Date object represents a single moment in time. It is based on the number of milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC).

const now = new Date();

console.log(now);    // Current date and time


### 🗂️ Different Date Formats

You can create a Date object in several ways:


// Current date and time

let now = new Date();


// Using date string

let date1 = new Date("2024-12-25");


// Using individual components: year, month (0-based), day, hours, minutes, seconds

let date2 = new Date(2024, 11, 25, 10, 30, 0);


// Using milliseconds since Unix Epoch

let date3 = new Date(1672531200000);


console.log(date1.toString());



### ⏱️ Why Dates Are Stored in Milliseconds?
JavaScript stores dates as number of milliseconds since 1970-01-01T00:00:00Z. Why?

📐 Easy to do arithmetic (e.g., date difference, countdowns).

💡 Compatible with Unix time, widely used in computing.

🔄 Easy conversions between date and time formats.


let now = new Date();

console.log(now.getTime()); // milliseconds since Jan 1, 1970



### 📊 JavaScript Date get and set Methods

| Purpose             | `get` Method           | `set` Method             | Description                                         |
| ------------------- | ---------------------- | ------------------------ | --------------------------------------------------- |
| Year                | `getFullYear()`        | `setFullYear(year)`      | Gets/Sets the full year (e.g., 2025)                |
| Month               | `getMonth()`           | `setMonth(month)`        | Gets/Sets the month (0 = Jan, 11 = Dec)             |
| Date (Day of Month) | `getDate()`            | `setDate(date)`          | Gets/Sets the day of the month (1–31)               |
| Day (Weekday)       | `getDay()`             | *(no set method)*        | Gets the day of the week (0 = Sunday, 6 = Saturday) |
| Hours               | `getHours()`           | `setHours(hours)`        | Gets/Sets the hour (0–23)                           |
| Minutes             | `getMinutes()`         | `setMinutes(minutes)`    | Gets/Sets the minutes (0–59)                        |
| Seconds             | `getSeconds()`         | `setSeconds(seconds)`    | Gets/Sets the seconds (0–59)                        |
| Milliseconds        | `getMilliseconds()`    | `setMilliseconds(ms)`    | Gets/Sets the milliseconds (0–999)                  |
| Time (Unix epoch)   | `getTime()`            | `setTime(ms)`            | Gets/Sets the time in ms since Jan 1, 1970          |
| UTC Full Year       | `getUTCFullYear()`     | `setUTCFullYear(year)`   | Gets/Sets the year in UTC                           |





### 🏅 Olympics 2028 Countdown Timer

Target Date: July 14, 2028 (Los Angeles Olympics Opening Ceremony)

-> It's explained, do checkout code.


### ✅ Conclusion

The Date object in JavaScript is powerful and essential for building real-time applications like clocks, calendars, and countdowns.
With a strong understanding of date formats, milliseconds, and timer logic, you can bring time-based interactivity into your web projects.

