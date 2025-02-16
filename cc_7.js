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


