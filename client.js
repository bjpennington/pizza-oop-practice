class Pizza {
    constructor(toppings = ['cheese']) {
        this.toppings = toppings;
        this.price = 10;
    }
    calculatePrice() {
        this.price += (0.99 * (this.toppings.length - 1));
        return this.price;
    }
}

class Order {
    constructor(pizzas) {
        this.pizzas = pizzas;
        this.total = 0;
        this.discount = 0;
    }

    calculateDiscount() {
        for (let i = 0; i < this.pizzas.length; i++) {
            if(this.pizzas[i].size = 'large') {
                this.discount ++;
            }
        }
        if (this.discount >= 2 && this.pizza = 'medium') {

        }
    }

    calculateOrderTotal() {
        for (let i = 0; i < this.pizzas.length; i++) {
            this.total += this.pizzas[i].calculatePrice();
        }
        return this.total;
    }
}

class SmallPizza extends Pizza {
    constructor(toppings) {
        super(toppings);
        this.size = 'small';
        this.price = 8.99
    }
}

class MediumPizza extends Pizza {
    constructor(toppings) {
        super(toppings);
        this.size = 'medium';
        this.price = 10.99
    }
}

class LargePizza extends Pizza {
    constructor(toppings) {
        super(toppings);
        this.size = 'large';
        this.price = 12.99
    }
}




let hungryPizza = new SmallPizza();

let smallPepPizza = new SmallPizza(['cheese', 'pepperoni'])

console.log(hungryPizza);
console.log(hungryPizza.calculatePrice());

console.log(smallPepPizza);
console.log(smallPepPizza.calculatePrice());






let myPizza = new Pizza(['cheese', 'pinepple', 'canadian bacon']);

console.log(myPizza);
console.log(myPizza.calculatePrice());
let pizzaTwo = new Pizza(['cheese', 'pepperoni', 'sausage', 'canadian bacon', 'ham']);

let myOrder = new Order([myPizza, pizzaTwo]);
console.log(myOrder);
console.log(myOrder.calculateOrderTotal());