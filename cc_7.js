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


