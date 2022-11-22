// const IS_ABSENT=0;

// let empcheck=Math.floor(Math.random()*10)%2;
// if(empcheck==IS_ABSENT)
// {
//     console.log("employee is absent");
//     return;

// }
// else
// {
// console.log("Employee is present");
// }
/*------------------------------------------------- */
const IS_FULL_TIME=1;
const IS_PART_TIME=2;
const FULL_TIME_HOURS=8;
const PART_TIME_HOURS=4;
const WAGE_PER_HOUR=20;
let emphr=0;
let empcheck=Math.floor(Math.random()*10)%3
console.log(empcheck)
switch(empcheck)
{
    case IS_PART_TIME:
        emphr=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        emphr=FULL_TIME_HOURS;
        break;
    default:
        emphr=0;
        break;
  
}
let dailywage=WAGE_PER_HOUR*emphr;
console.log("daily wage of Employee is"+dailywage);