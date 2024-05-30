const recipeList = document.querySelector(".recipe-list");

const updateReceipeUIHandler = (receipes) => {
  recipeList.innerHTML = ""
  if (receipes.length === 0)
    recipeList.innerHTML = `<h2 class="text-align:center">No Recipes found !!</h2>`
  else {
    for (let item of receipes) {
      let html = `<div class="card">
    <h3>${item.title}</h3>
    <p>${item.time} mins to make </p>
    <div>${item.method.slice(0, 5)} ... </div>
    <a href="recipe.html?id=${item.id}">Cook this</a>
    </div>`;

      recipeList.innerHTML += html;
    }
  }
}

const getRecipes = async () => {
  try {
    const response = await fetch("http://localhost:3000/recipes")

    if (!response.ok) {
      throw new Error("Internal Server Error");
    }
    const data = await response.json();
    updateReceipeUIHandler(data);
  }
  catch (err) {
    alert(err.message);
  }
};

const searchRecipe = async (e) => {
  const title = e.target.value;
  try {
    const response = await fetch(`http://localhost:3000/recipes?title=${title}`)

    if (!response.ok) {
      throw new Error("Internal Server Error");
    }
    const data = await response.json();
    updateReceipeUIHandler(data);
  }
  catch (err) {
    alert(err.message);
  }
};

window.onload = () => {
  getRecipes();
};
