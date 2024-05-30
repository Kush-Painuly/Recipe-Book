let ingArray = [];
const addReceipe = async (e) => {
  e.preventDefault();
  const receipeInputs = document.querySelectorAll('.receipe-dets');
  let RecipeObj = {};
  receipeInputs.forEach((item) => {
    const Keys = item.name;
    const value = item.value;
    RecipeObj[Keys] = Keys === 'ing' ? ingArray : value
  })
  try {
    const response = await fetch("http://localhost:3000/recipes", {
      method: "POST",
      body: JSON.stringify(RecipeObj),
      headers: {
        "Content-Type": "application/json"
      },
    });
    window.location.href = "home.html";
  } catch (err) {
    console.log(err)
  }
  console.log(RecipeObj)
};

const addIngredients = () => {
  console.log("Ingredients functions called")
  let IngredientInput = document.querySelector('input[name="ing"]')
  let IngredientInputValue = IngredientInput.value;

  ingArray.push(IngredientInputValue);
  IngredientInput.value = '';

  if (ingArray.length > 1) {
    document.querySelector('.current-ings').innerText += `,`;
  }
  document.querySelector('.current-ings').innerText += IngredientInputValue;
};
