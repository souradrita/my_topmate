export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold">Your Name 👋</h1>
        <p className="mt-3 text-gray-600">1:1 Services • Book a Call</p>
        <div className="mt-6 p-4 border rounded-xl">
          <h2 className="font-semibold">1:1 Career Call</h2>
          <p>30 mins • ₹999</p>
          <a href="/book">Book Now</a>
        </div>
      </div>
    </main>
  );
}