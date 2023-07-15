// meals container section
const loadUserFetch = async (mealName) => {
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
        const res = await fetch(url);
        const data = await res.json();
        displayMealsCard(data.meals);
    }
    catch(error) {
        console.log(error)
    }
}

const displayMealsCard = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.textContent = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = 
        `
            <div onclick="loadIdFetch(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 120)}</p>
                </div>
            </div>
        `
        mealsContainer.appendChild(mealDiv);
    })

}




// meal details section
const loadIdFetch = async (mealId) => {
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    }
    catch(error) {
        console.log(error)
    }
}

const displayMealDetails = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = 
    `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary" target="_black">Go Youtube</a>
        </div>
    `
    mealDetails.appendChild(mealDiv);
}




// input field section
const searchMeals = () => {
    const inputFieldMeal = document.getElementById('input-field');
    const inputFieldValue = inputFieldMeal.value;
    loadUserFetch(inputFieldValue);
    inputFieldMeal.value = '';
}