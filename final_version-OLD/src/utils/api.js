export async function fetchData() {
    const response = await fetch("http://localhost:4000/");

    if (!response.ok) {
        throw new Error("Error fetching data");
    }

    return response.json();
}