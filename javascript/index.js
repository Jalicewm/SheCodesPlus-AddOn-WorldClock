setInterval(function () {
  let washingtonElement = document.querySelector("#washington");
  let washingtonDateElement = washingtonElement.querySelector(".date");
  let washingtonTimeElement = washingtonElement.querySelector(".time");
  let washingtonTime = moment().tz("America/New_York");
  washingtonDateElement.innerHTML = washingtonTime.format("MMMM Do YYYY");
  washingtonTimeElement.innerHTML = washingtonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let caracasElement = document.querySelector("#caracas");
  let caracasDateElement = caracasElement.querySelector(".date");
  let caracasTimeElement = caracasElement.querySelector(".time");
  let caracasTime = moment().tz("America/Caracas");
  caracasDateElement.innerHTML = caracasTime.format("MMMM	Do YYYY");
  caracasTimeElement.innerHTML = caracasTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");
  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let guatemalaElement = document.querySelector("#guatemala");
  let guatemalaDateElement = guatemalaElement.querySelector(".date");
  let guatemalaTimeElement = guatemalaElement.querySelector(".time");
  let guatemalaTime = moment().tz("America/Guatemala");
  guatemalaDateElement.innerHTML = guatemalaTime.format("MMMM	Do YYYY");
  guatemalaTimeElement.innerHTML = guatemalaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let mexicoElement = document.querySelector("#mexico");
  let mexicoDateElement = mexicoElement.querySelector(".date");
  let mexicoTimeElement = mexicoElement.querySelector(".time");
  let mexicoTime = moment().tz("America/Mexico_City");
  mexicoDateElement.innerHTML = mexicoTime.format("MMMM Do YYYY");
  mexicoTimeElement.innerHTML = mexicoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);
