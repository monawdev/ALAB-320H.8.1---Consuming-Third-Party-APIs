const BASE_URL = "https://swapi.py4e.com/api/starships/";

export async function getAllStarships() {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch starships");
  }

  const data = await res.json();

  return data.results;
}