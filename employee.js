const IS_ABSENT=0;

let empcheck=Math.floor(Math.random()*10)%2;
if(empcheck==IS_ABSENT)
{
    console.log("employee is absent");
    return;

}
else
{
console.log("Employee is present");
}