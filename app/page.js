import GreetingForm from "./components/GreetingForm/GreetingForm"; // Import the GreetingForm component

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Greeting App</h1>

      {/* Render the GreetingForm component */}
      <GreetingForm />
    </div>
  );
}
