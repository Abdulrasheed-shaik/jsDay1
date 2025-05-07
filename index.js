// Write a JavaScript program that simulates adding items to a shopping cart, calculates
// total cost with tax, applies discount using operators, and displays the result using
// proper variable types and scope.

const cart=[]
function addItems(item,price,quantity){
    const itemTotal = price * quantity
    const tax = 0.18
    const discount = 0.1
    const total = itemTotal+(itemTotal*tax)-(itemTotal*discount)
    cart.push({item,price,quantity,total})
}
addItems("apple",20,6)
addItems("double ka meetha",100,1)
for (let item of cart){
    console.log(`Item: ${item.item}, Price: ${item.price}, Quantity: ${item.quantity}, Total: ${item.total.toFixed(2)}`)
}

