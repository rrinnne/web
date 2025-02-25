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
        this.toppings = [];
        this.type = type;
        this.size = size;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        this.toppings = this.toppings.filter(t => t.name !== topping.name);
    }

    calculatePrice() {
        let price = this.types[this.type].price + this.sizes[this.size].price;
        this.toppings.forEach(t => {
            price += t.price;
        });
        return price;
    }

    calculateCalories() {
        let calories = this.types[this.type].calories + this.sizes[this.size].calories;
        this.toppings.forEach(t => {
            calories += t.calories;
        });
        return calories;
    }
}

let selectedPizza = new Pizza("Маргарита", "Маленькая");

document.querySelectorAll('.pizza-option').forEach(el => {
    el.addEventListener('click', function () {
        document.querySelectorAll('.pizza-option').forEach(pizza => pizza.classList.remove('selected')); 
        this.classList.add('selected'); 

        let type = this.getAttribute("data-type");
        selectedPizza = new Pizza(type, selectedPizza.size);
        updateButton();
    });
});


document.querySelectorAll('input[name="size"]').forEach(el => {
    el.addEventListener('change', function () {
        selectedPizza.size = this.value;
        updateButton();
    });
});

document.querySelectorAll('.topping').forEach(el => {
    el.addEventListener('click', function () {
        let name = this.getAttribute("data-name");
        let priceSmall = parseInt(this.getAttribute("data-price-small") || this.getAttribute("data-price"));
        let priceBig = parseInt(this.getAttribute("data-price-big") || this.getAttribute("data-price"));
        let calories = parseInt(this.getAttribute("data-cal"));

        let topping = {
            name: name,
            price: selectedPizza.size === "Большая" ? priceBig : priceSmall,
            calories: calories
        };

        if (selectedPizza.toppings.find(t => t.name === name)) {
            selectedPizza.removeTopping(topping);
            this.style.border = "1px solid #ddd";
        } else {
            selectedPizza.addTopping(topping);
            this.style.border = "2px solid orange";
        }

        updateButton();
    });
});

function updateButton() {
    let price = selectedPizza.calculatePrice();
    let calories = selectedPizza.calculateCalories();
    document.getElementById("addToCart").innerText = `Добавить в корзину за ${price}₽ (${calories} Ккал)`;
}
