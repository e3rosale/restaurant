// TODO: Use a more elegant solution when response data is not serialized
// json. Right now, non-serialized json triggers an error, and null is returned.
export const getOrder = async (orderId) => {
  try {
    const res = await fetch(`http://localhost:3000/api/orders/${orderId}`);
    const { data } = await res.json();
    return data ?? null;
  } catch (error) {
    return null;
  }
};
