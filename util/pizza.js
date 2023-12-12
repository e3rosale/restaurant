// returns an array of Pizza or empty array
export const getPizzaList = async () => {
  const res = await fetch("http://localhost:3000/api/products/");
  const { data } = await res.json();

  return data ?? [];
};

// TODO: What happens if the api server is down? What will happen
// in the fetch call? In other words, what happens when fetch times out
// returns an array of Pizza ids or empty array
export const getPizzaListIds = async () => {
  const res = await fetch("http://localhost:3000/api/products/");
  const { data } = await res.json();

  return data ?? null;
};

// returns a Pizza object or null
export const getPizzaData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const { data } = await res.json();

  return data ?? null;
};
