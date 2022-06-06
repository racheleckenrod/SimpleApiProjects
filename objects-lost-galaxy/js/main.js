//Create a pizza object that has four properties and three methods

let pizzaTwo = {}

pizzaTwo.size = "small"
pizzaTwo.toppings = ["sausage", "green peppers", "mushrooms", "onions", "banana peppers"]
pizzaTwo.sauce = "normal"
pizzaTwo.crust = "thin"

pizzaTwo.delivery = function(){
    console.log("ding dong, pizza's here!!")
}

pizzaTwo.burnMouth = function(){
    console.log("Way too hot, let it cool.....")
}
pizzaTwo.frisbee = function(){
    console.log("wweeeeeee!!!!")
}


let pizza = {}

pizza.size = "large"
pizza.toppings = ["sausage", "green peppers", "mushrooms", "onions"]
pizza.sauce = "red sauce"
pizza.crust = "deep dish"

pizza.delivery = function(){
    console.log("ding dong, pizza's here!!")
}

pizza.burnMouth = function(){
    console.log("Way too hot, let it cool.....")
}
pizza.frisbee = function(){
    console.log("wweeeeeee!!!!")
}