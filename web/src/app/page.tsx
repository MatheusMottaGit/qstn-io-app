import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="px-4 py-3 flex-1">
      <header className="flex items-center justify-between">
        <h1 className="text-sm font-semibold">Dashboard</h1>

        <Profile />
      </header>
    </main>
  );
}
