//Date
const SECONDS_MS = (num)=> num * 1000; 
const MINUTES_MS = (num)=> num * 60 * SECONDS_MS(1); 
const HOURS_MS = (num)=> num * 60 * MINUTES_MS(1);
const DAY_MS = (num)=> num * 24 * HOURS_MS(1);
const WEEKS_MS = (num)=> num * 7 * DAY_MS(1);
const MONTHS_MS = (num)=> {
    let year = new Date().getFullYear();
    let isLeapYear = (!year%4)&&year%100 || !year%400;
    let days = num * 30 - 30 - 2;
    if(num > 1) days ++;
    if(num > 2 && isLeapYear) days += 1;
    if(num > 3) days ++;
    if(num > 5) days ++;
    if(num > 7) days ++;
    if(num > 8) days ++;
    if(num > 10) days ++;
    console.log(days);
    return days * DAY_MS(1);
};
const YEAR_MS = (year)=> {
    let date = new Date().getTime();
    let last = new Date(`${year}-1-1/`).getTime();
    return date - last;
};
const DATE_FORMAT = (()=> {
    let date = new Date();
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
})();