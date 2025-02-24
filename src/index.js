class Pizza {
    constructor(type, size) {
        this.types = {
            "Маргарита": { price: 500, calories: 300 },
            "Пепперони": { price: 800, calories: 400 },
            "Баварская": { price: 700, calories: 450 }
        };
        this.sizes = {
            "Большая": { price: 200, calories: 200 },
            "Маленькая": { price: 100, calories: 100 }
        };
        this.toppings = {
            "Сливочная моцарелла": { price: 50, calories: 2 },
            "Сырный борт": { price: { "Маленькая": 150, "Большая": 300 }, calories: 50 },
            "Чедер и пармезан": { price: { "Маленькая": 150, "Большая": 300 }, calories: 50 }
        };
        
        if (!this.types[type] || !this.sizes[size]) {
            throw new Error("Неверный тип или размер пиццы");
        }
        
        this.type = type;
        this.size = size;
        this.selectedToppings = [];
    }
    
    addTopping(topping) {
        if (this.toppings[topping] && !this.selectedToppings.includes(topping)) {
            this.selectedToppings.push(topping);
        }
    }
    
    removeTopping(topping) {
        this.selectedToppings = this.selectedToppings.filter(t => t !== topping);
    }
    
    getToppings() {
        return this.selectedToppings;
    }
    
    getSize() {
        return this.size;
    }
    
    getType() {
        return this.type;
    }
    
    calculatePrice() {
        let price = this.types[this.type].price + this.sizes[this.size].price;
        
        this.selectedToppings.forEach(topping => {
            let toppingPrice = this.toppings[topping].price;
            price += typeof toppingPrice === 'object' ? toppingPrice[this.size] : toppingPrice;
        });
        
        return price;
    }
    
    calculateCalories() {
        let calories = this.types[this.type].calories + this.sizes[this.size].calories;
        
        this.selectedToppings.forEach(topping => {
            calories += this.toppings[topping].calories;
        });
        
        return calories;
    }
}

function calculate() {
    const type = document.getElementById("type").value;
    const size = document.getElementById("size").value;

    const pizza = new Pizza(type, size);

    if (document.getElementById("topping1").checked) pizza.addTopping("Сливочная моцарелла");
    if (document.getElementById("topping2").checked) pizza.addTopping("Сырный борт");
    if (document.getElementById("topping3").checked) pizza.addTopping("Чедер и пармезан");

    document.getElementById("price").textContent = "Цена: " + pizza.calculatePrice() + " руб.";
    document.getElementById("calories").textContent = "Калории: " + pizza.calculateCalories() + " ккал.";
}
