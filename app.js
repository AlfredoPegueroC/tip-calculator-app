const tipBtn = document.getElementsByName("tip");
const resetBtn = document.querySelector("#reset");

const bills = document.querySelector("#bill");
const numberPeople = document.querySelector("#numberPeople");
const customTip = document.querySelector("#custom");

// RESULTS QUERY
const total = document.querySelector("#total");
const tipResult = document.querySelector("#result_tip");

function CalculateSlit(bill, numPeople, tip = 2) {
  if (bill !== "" && numPeople !== "") {
    let tip_amount = (bill * (tip / 100)) / numPeople;

    tipResult.textContent = tip_amount.toFixed(2);
    total.textContent = (bill / numPeople + tip_amount).toFixed(2);
  }
  return;
}
function getTip() {
  if (document.querySelector(".btn.active") === null) {
    return;
  }
  return document.querySelector(".btn.active").value.slice(0, -1);
}
function removeActive(tip) {
  for (let i = 0; i < tip.length; i++) {
    tip[i].classList.remove("active");
  }
}
function reset() {
  removeActive(tipBtn)
  customTip.value = "";
  numberPeople.value = "";
  bills.value = "";
  tipResult.textContent = "0.0"
  total.textContent = "0.0"
}

tipBtn.forEach((element) => {
  element.addEventListener("click", () => {
    customTip.value = "";
    numberPeople.value = "";
    removeActive(tipBtn);
    element.classList.add("active");
  });
});

customTip.addEventListener("input", () => {
  removeActive(tipBtn);
  CalculateSlit(bill.value, numberPeople.value, customTip.value);
  console.log(getTip())
});
bills.addEventListener("input", () => CalculateSlit(bill.value, numberPeople.value, getTip()));
numberPeople.addEventListener("input", () =>CalculateSlit(bill.value, numberPeople.value, getTip())
);

resetBtn.addEventListener("click", () => reset())