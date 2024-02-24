const output_day = document.querySelector("#output-days");
const output_year = document.querySelector("#output-year");
const output_month = document.querySelector("#output-month");
const btnImage = document.querySelector("#btnImage");

let day = document.querySelector("#dd");
let month = document.querySelector("#mm");
let year = document.querySelector("#yy");
let isValid = false;
let errorDay = document.querySelector(".error-day");
let errorMonth = document.querySelector(".error-month");
let errorYear = document.querySelector(".error-year");

btnImage.addEventListener("click", CalculateDate);

day.addEventListener("input", (e) => {
  if (+day.value > 31) {
    errorDay.textContent = "must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textContent = "";
  }
  if (+day.value === 0) {
    isValid = true;
    errorDay.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorDay.textContent = "";
  }
});
year.addEventListener("input", (e) => {
  if (+year.value > 2023) {
    errorYear.textContent = "must be a valid year";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorYear.textContent = "";
  }
  if (+year.value === 0) {
    isValid = false;
    errorYear.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorYear.textContent = "";
  }
});
month.addEventListener("input", (e) => {
  if (+month.value > 12) {
    errorMonth.textContent = "must be a valid month";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorMonth.textContent = "";
  }
  if (+month.value === 0) {
    isValid = false;
    errorMonth.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    errorMonth.textContent = "";
  }
});

function CalculateDate() {
  if (isValid) {
    let birthday = `${month.value}/${day.value}/${year.value}`;

    let birthdayObj = new Date(birthday);
    let today = new Date();

    // Calculate age
    let ageInMilliseconds = today - birthdayObj;
    let ageDate = new Date(ageInMilliseconds);
    let ageYear = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 1;

    output_day.textContent = ageDay;
    output_year.textContent = ageYear;
    output_month.textContent = ageMonth;
  } else {
    alert("Please fill in all required fields with valid values.");
  }
}
