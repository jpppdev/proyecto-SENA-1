export async function getInventoryProducts() {
    const res = await fetch("/src/data/selects/inventoryProducts.json");
    return res.json();
}