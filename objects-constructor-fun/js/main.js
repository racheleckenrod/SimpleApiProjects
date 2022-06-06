//Create a constructor with 4 properties and 3 methods

function MakePizza(size,toppings,sauce,crust) {

    this.size = size
    this.toppings = toppings
    this.sauce = sauce
    this.crust = crust

    this.mouthBurn = function(){
        console.log('youch!!!')
    }

    this.deliveryTime = function(){
        console.log('Ding dong, pizza is here')
    }

    this.frisbee = function(){
        console.log('zzzOOOOOOommmm.....')
    }
}

let pizza = new MakePizza('large', ['spinach','garlic'],'white','deep dish')