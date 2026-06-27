export async function getCategories() {
    const res = await fetch("/src/data/selects/categories.json");
    return res.json();
}