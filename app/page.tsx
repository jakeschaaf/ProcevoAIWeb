export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Procevo AI</h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
        AI-powered automation for mid-market companies ready to scale.
      </p>
      <button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
        Get Started
      </button>
    </main>
  );
}
