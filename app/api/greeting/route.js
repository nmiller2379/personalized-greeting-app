// This API route handles POST requests and returns a personalized greeting
export async function POST(req) {
  // Parse the incoming request body to extract the name
  const { name } = await req.json();

  // If no name is provided, return a 400 status with an error message
  if (!name) {
    return new Response(JSON.stringify({ message: "Name is required!" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Generate a personalized greeting
  const greeting = `Hello, ${name}!`;

  // Return the personalized greeting in the response
  return new Response(JSON.stringify({ message: greeting }), {
    headers: { "Content-Type": "application/json" },
  });
}
