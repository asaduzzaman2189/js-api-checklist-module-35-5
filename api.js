const loadSingleUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displaySingleUser(data.results[0]));
};
loadSingleUser();

const displaySingleUser = (user) => {
  console.log(user);
};

//meal db
//toggle spinner function
const toggleSpinner = (displayStyle) => {
  document.getElementById("spinner").style.display = displayStyle;
};
const toggleSearchResult = (displayStyle) => {
  document.getElementById("meals").style.display = displayStyle;
};
const searchMeal = () => {
  const searchText = document.getElementById("search-field").value;

  // display spinner-toggle spinner function call
  toggleSpinner("block");

  //আগের সার্চ রেজাল্ট দেখাব না তাই
  toggleSearchResult("none");

  loadMeals(searchText);
  document.getElementById("search-field").value = "";
};

const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const container = document.getElementById("meals");
  container.textContent = "";
  if (!meals) {
    // console.log("Oops!"); div তৈরি করে এটা দেখাবে
  }
  meals?.forEach((meal) => {
    console.log(meal);
    const div = document.createElement("div");
    div.innerHTML = `
    <h1>${meal.strMeal}</h1>
    <p>${meal.strIngredient18 ? meal.strIngredient18 : "Not available"}</p>
    <button onclick="loadMealDetail('${meal.strMeal}')">Click Me</button>
    `;
    container.appendChild(div);
  });

  //toggle spinner off
  toggleSpinner("none");

  //toggleSearchResult দেখানোর জন্য-
  toggleSearchResult("block");
};

loadMeals();

const loadMealDetail = (mealName) => {
  console.log(mealName);
};
