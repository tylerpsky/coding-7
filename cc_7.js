//Task 1

function calculateInvoice(subtotal, taxRate, discount) {

    let total = (subtotal + (subtotal * taxRate)) - discount;
    return 'Total Invoice: $${total.toFixed(2)}';
}

console.log(calculateInvoice(100, 0.08, 5)); 
console.log(calculateInvoice(500, 0.1, 20));

//Task 2

const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

console.log(calculateHourlyWage(52000,40));
console.log(calculateHourlyWage(75000,35));

//Task 3

const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = 0.05; 

    if (years >= 5) {
        discountRate = 0.15;
    } else if (years >= 3) {
        discountRate = 0.10;
    }

    let discountedPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

console.log(calculateLoyaltyDiscount(100, 6));
console.log(calculateLoyaltyDiscount(200, 2));

//Task 4

function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = 0;
    let perLbRate = 0;

    if (location === "USA") {
        baseCost = 5;
        perLbRate = 0.5;
    } else if (location === "Canada") {
        baseCost = 10;
        perLbRate = 0.7;
    }

    let totalCost = baseCost + (weight * perLbRate);
    if (expedited) {
        totalCost += 10;
    }

    return `Shipping Cost: $${totalCost.toFixed(2)}`;
}

console.log(calculateShippingCost(10, "USA", true)); 
console.log(calculateShippingCost(5, "Canada", false));
