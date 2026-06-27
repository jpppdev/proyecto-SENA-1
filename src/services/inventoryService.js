// src/services/inventoryService.js

export async function getBrands() {
    const res = await fetch("/src/data/selects/brands.json");
    return res.json();
}

export async function getAccountants() {
    const res = await fetch("/src/data/selects/accountants.json");
    return res.json();
}

export async function getStatuses() {
    const res = await fetch("/src/data/selects/statuses.json");
    return res.json();
}