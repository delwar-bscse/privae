import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex">
        <section className="w-56 xl:w-68">
          <Sidebar />
        </section>
        <div className="flex-1">
          <header className="">
            <Header />
          </header>
          <main className="bg-white overflow-y-auto hide-scrollbar" style={{ height: "calc(100vh - 100px)" }}>
            {children}
          </main>
          <Toaster />
        </div>
      </div>
  );
}
