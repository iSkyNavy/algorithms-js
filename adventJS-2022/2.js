function handleIsBisiest(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  }
  return false;
}
function countHours(year, holidays) {
  let countAllowrdHolidays = 0;
  holidays = new Set(holidays);
  holidays = [...holidays];
  const isBisiest = handleIsBisiest(year);
  if (holidays.includes("02/29")) {
    let indexOfBisisestDay = holidays.indexOf("02/29");
    if (isBisiest) {
      countAllowrdHolidays++;
    } else {
      holidays.splice(indexOfBisisestDay, 1);
    }
  }
  holidays.map((holiday) => {
    let finalDate = holiday + "/" + year;
    const date = new Date(finalDate);
    let day = date.getDay();
    if (day > 0 && day < 6) {
      countAllowrdHolidays++;
    }
  });
  return countAllowrdHolidays * 2;
}

const year = 2020;
const holidays = ["01/06", "04/01", "12/25", "02/29"]; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays); // 2 días -> 4 horas extra en el año
// console.log(isBisiest(2020));
