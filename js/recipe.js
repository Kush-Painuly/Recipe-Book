const Receipe = document.querySelector('.recipe');

const updateReceipeUI = (recipe) => {
    let html = `
    <h2 class="page-title">${recipe.title}</h2>
    <p>It takes ${recipe.time} mins to cook this recipe</p>
    <p>${recipe.ing}</p>
    <p class="method">${recipe.method}</p>`;

    Receipe.innerHTML += html;
}

const getRecipe = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/recipes/${id}`)

        if (!response.ok) {
            throw new Error("Internal Server Error")
        }
        const data = await response.json();
        updateReceipeUI(data);
    }
    catch (err) {
        console.log(err.message)
    }
};

window.onload = () => {
    const queryparams = new URLSearchParams(window.location.search);
    const id = queryparams.get("id");
    getRecipe(id)
}