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
          setInterval(function() {document.querySelector('h2').innerText =   "   " + data.drinks[i].strDrink}, 1000);
      
      
      
    //   setInterval(function() {document.querySelector('#ingredients').innerText = data.drinks[i].strMeasure1 + data.drinks[i].strIngredient1 + "   " + data.drinks[i].strMeasure2 + data.drinks[i].strIngredient2  + "   " + data.drinks[i].strMeasure3 + data.drinks[i].strIngredient3 + "   " +  data.drinks[i].strMeasure4 + data.drinks[i].strIngredient4 + "   " + data.drinks[i].strMeasure5 + data.drinks[i].strIngredient5 + "   " + data.drinks[i].strMeasure6 + data.drinks[i].strIngredient6}, 1000)


      setInterval(function() {document.querySelector('img').src = data.drinks[i].strDrinkThumb}, 10000)
    //   setInterval(function() {document.querySelector('#instructions').innerText = data.drinks[i].strInstructions}, 1000)
      }    
})
    .catch(err => {
        console.log(`error ${err}`)
    });

}

