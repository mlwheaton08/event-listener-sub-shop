import {getOrders, addNewOrder} from './orders.js';

const displayOrders = () => {
    const orders = getOrders()
    let HTML = '';
    for (const order of orders) {
        HTML += `
        <div class="order">
        <p>Order #${order.id}</p>
        <p>Bread: ${order.bread}</p>
        <p>Protein: ${order.protein}</p>
        <p>Toppings: ${order.toppings}</p>
        </div>
        `
    }
    document.getElementById('orders').innerHTML = HTML;
}
displayOrders()

document.addEventListener('click', (e) => {
    if (e.target.id === 'submitButton') {
        const orders = getOrders()
        const newId = orders.length + 1;
        const newBread = document.querySelector('input[name=bread]:checked')?.value;
        const newProtein = document.querySelector('input[name=protein]:checked')?.value;
        const newToppings = []
        const selectedToppings = document.querySelectorAll('input[name=toppings]:checked');
        selectedToppings.forEach(topping => {newToppings.push(topping.value)});
        const newOrder = {
            id: newId,
            bread: newBread,
            protein: newProtein,
            toppings: newToppings
        }
        addNewOrder(newOrder)
        displayOrders()
    }
})