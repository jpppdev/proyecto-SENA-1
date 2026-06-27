// src/services/orderService.js

export async function getWaiters() {
    const res = await fetch("/src/data/selects/waiters.json");
    return res.json();
}

export async function getDishes() {
    const res = await fetch("/src/data/selects/dishes.json");
    return res.json();
}

export async function getOrderStatuses() {
    const res = await fetch("/src/data/selects/orderStatuses.json");
    return res.json();
}