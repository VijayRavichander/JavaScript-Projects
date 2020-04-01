document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

function calculateResults(e) {
  const loanAmount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const yearsToRepay = document.getElementById("years");
  const monthlyPayemnt = document.getElementById("monthly-payment");
  const yearlyPayment = document.getElementById("yearly-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(loanAmount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(yearsToRepay.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayemnt.value = monthly.toFixed(2);
    yearlyPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError("Please check your numbers");
  }

  e.preventDefault();
}

function showError(error) {
  const errorDiv = document.createElement("div");
  const card = document.querySelector(".card");
  const results = document.querySelector("#results");

  errorDiv.className = "alert alert-danger";

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, results);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
