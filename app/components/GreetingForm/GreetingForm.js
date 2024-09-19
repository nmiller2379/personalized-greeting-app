"use client"; // Mark this as a Client Component because it handles form interaction and API calls

import { useState } from "react";

export default function GreetingForm() {
  // State to track the user's input and the response from the server
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing on form submission

    // Reset the error message
    setError("");

    try {
      // Send a POST request to the /api/greeting route with the user's name
      const res = await fetch("/api/greeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      // If the response is not OK, set an error message
      if (!res.ok) {
        const { message } = await res.json();
        setError(message);
        return;
      }

      // Parse the JSON response and extract the personalized greeting
      const { message } = await res.json();
      setGreeting(message); // Display the greeting to the user
    } catch (err) {
      // Handle any unexpected errors
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2>Personalized Greeting Generator</h2>

      {/* Display an error message if something goes wrong */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display the personalized greeting if available */}
      {greeting && <p>{greeting}</p>}

      {/* Form for entering the user's name */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update the name state as the user types
        />
        <button type="submit">Get Greeting</button>
      </form>
    </div>
  );
}
