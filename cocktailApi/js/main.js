//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
document.querySelector('button').addEventListener('click',getDrink)

function getDrink(){
    let drink = document.querySelector('input').value


    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
      console.log(data.drinks)
      console.log(data.drinks[0])
      for(let i = 0; i < data.drinks.length; i++){
          console.log(data.drinks[i])
        document.querySelector('h2').innerText +=   "   " + data.drinks[i].strDrink 
      }
      
      
      document.querySelector('#ingredients').innerText = data.drinks[0].strMeasure1 + data.drinks[0].strIngredient1 + "   " + data.drinks[0].strMeasure2 + data.drinks[0].strIngredient2  + "   " + data.drinks[0].strMeasure3 + data.drinks[0].strIngredient3 + "   " +  data.drinks[0].strMeasure4 + data.drinks[0].strIngredient4 + "   " + data.drinks[0].strMeasure5 + data.drinks[0].strIngredient5 + "   " + data.drinks[0].strMeasure6 + data.drinks[0].strIngredient6


      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

