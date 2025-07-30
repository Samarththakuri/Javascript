document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expense = JSON.parse(localStorage.getItem("expenses")) || [];
  updateTotal();
  let totalAmount = calculateTotal();
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // everyting is in string format
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());
    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };
      expense.push(newExpense);
      saveExpensesToLocal();
      updateTotal();
      renderExpense();
      //   clear  input
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });
  function renderExpense() {
    expenseList.innerHTML = "";
    expense.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
            ${expense.name}-${expense.amount}
            <button data-id="${expense.id}">Delete</button>`;
      expenseList.appendChild(li);
    });
  }
  function calculateTotal() {
    let summation = 0;
    expense.forEach((element) => {
      summation += element.amount;
    });
    return summation;
  }
  function saveExpensesToLocal() {
    // its the browsers api
    localStorage.setItem("expenses", JSON.stringify(expense));
  }
  //   to save the total calculated too
  function updateTotal() {
    let totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expense = expense.filter((expense) => expense.id != expenseId);
      saveExpensesToLocal();
      renderExpense();
      updateTotal();
    }
  });
});
