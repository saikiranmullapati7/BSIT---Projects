// 6.	Inventory Stock Alert System

// Build logic to monitor product stock levels. Based on quantity available, 
// return messages like Out of Stock, Low Stock, Moderate Stock, or In Stock. This should help inventory management in real systems.

// Topics to use: If-else ladder, functions, comparison operators, variables.


function checkStock(productName, quantity) {
    let status;
    let emoji;

    if (quantity === 0) {
        status = "Out of stock";
        emoji = "⚠️";
    }else if(quantity <= 10) {
        status = "Low stock";
        emoji = "🥲";
    }else if(quantity <= 50) {
        status = "Moderate stock";
        emoji = "😊";
    }else {
        status = "In stock";
        emoji = "😮";
    }

    return `${emoji} ${productName}: ${status} quantity Available: ${quantity} units `;
}

console.log(checkStock("  Laptop",0));
console.log(checkStock("  Mobiles",8));
console.log(checkStock("  earPhones", 5));
console.log(checkStock("  PS5:",100));