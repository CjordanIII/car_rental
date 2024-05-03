"use strict";

/*
    - Basic Car Rental is $29.99 per day
    - There is a 30% surcharge if you are under 25
    - Option costs
        - Electric Toll Tag $3.95
        - GPS $2.95
        - Roadside Assistance $2.95
    - Data to display
        - Car rental cost
        - Options cost
        - under 25 surcharge cost
        - Total due
*/

window.onload = function () {
  let rentalForm = document.querySelector("#rentalForm");
  rentalForm.addEventListener("submit", calcCarRentalFees);
};

function calcCarRentalFees(event) {
  event.preventDefault();

  let theForm = event.target;
  let totalCarRentalFees = 29.99 * Number(theForm.numDays.value);
  let optionsCost = 0;
  if (theForm.tollTag.checked) {
    optionsCost += 3.95;
  }
  if (theForm.gps.checked) {
    optionsCost += 2.95;
  }
  if (theForm.rsa.checked) {
    optionsCost += 2.95;
  }
  let ageSurcharge = 0;
  if (theForm.under25.value === "yes") {
    ageSurcharge = totalCarRentalFees * (30 / 100);
  }

  let totalDue = totalCarRentalFees + optionsCost + ageSurcharge;

  let message = `<div> Car Rental Cost: $${totalCarRentalFees.toFixed(2)}</div>
  <div> Options Cost:v $${optionsCost.toFixed(2)}</div>
  <div> Under 25  Surcharge: $${ageSurcharge.toFixed(2)}</div>
  <div class="mt-5"> Total Due: $${totalDue.toFixed(2)}</div>`;

  document.querySelector("#results").innerHtml = message;
}
