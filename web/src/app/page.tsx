import PagesHeader from "@/components/pages-header";

export default function Home() {
  return (
    <main className="px-5 py-4 flex-1 flex flex-col gap-7">
      <div className="flex-1">
        <PagesHeader pageTitle="Dashboard" />

        {/* graphics */}
        <div className=""></div>
      </div>
    </main>
  );
}
