const orders = [
    {
        id: 1,
        bread: 'White',
        protein: 'Ham',
        toppings: ['Green Bell Peppers', 'Onions', 'Mustard']
    }
]

export const addNewOrder = (newOrder) => {
    orders.push(newOrder)
}

export const getOrders = () => {
    return orders.map(order => ({...order}))
}