import "../globals.css";
import Menubar from "@/components/menubar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col">
          <Menubar />
          {children}
        </main>
      </body>
    </html>
  );
}
