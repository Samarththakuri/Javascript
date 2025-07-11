// example 1
// grab kar rahe hai hum id is paragraph to uss hisaab se
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is change";
  });

// example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeetype = document.getElementById("coffeeType");
  coffeetype.textContent = "Espresso";
  coffeetype.style.backgroundColor = "Brown";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  let list = document.getElementById("shoppingList").appendChild(newItem); //ul ke andr li child hai every element becomes a node
});

// exmaple 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasklist = document.getElementById("taskList");
    tasklist.lastElementChild.remove();
  });

//example 6
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("");
});

// exampale 7
document.getElementById("teaList").addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target && event.target.matches(".teaItem")) {
    alert("you selected " + event.target.textContent);
  }
});

// example 8 value form ki hold kar rahe hai
// question how to grab the label no spoon feeding
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is ${feedback}`;
  });

// example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});
