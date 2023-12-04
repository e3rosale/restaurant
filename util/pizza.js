// returns an array of Pizza or empty array
export const getPizzaList = async () => {
  const res = await fetch("http://localhost:3000/api/products/");
  const { data } = await res.json();

  return data ?? [];
};

// returns an array of Pizza ids or empty array
export const getPizzaListIds = async () => {
  const res = await fetch("http://localhost:3000/api/products/");
  const { data } = await res.json();
  const pizzaList = data ?? [];

  return pizzaList.map((pizza) => {
    return {
      params: {
        id: pizza._id,
      },
    };
  });
};

// returns a Pizza object or null
export const getPizzaData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const { data } = await res.json();

  return data ?? null;
};
