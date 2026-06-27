// utils/api.js
export async function acceptRequestAndCreateOrder(bookingId) {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/servicebookings/accept/${bookingId}`,
    { method: "PUT" }
  );
  if (!response.ok) throw new Error("Failed to accept request");
  return await response.json();
}
