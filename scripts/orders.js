const orders = [
    {
        id: 1,
        bread: 'White',
        protein: 'Ham',
        toppings: ['Green Bell Peppers', 'Onions', 'Mustard']
    }
]

export const getOrders = () => {
    return orders.map(order => ({...order}))
}