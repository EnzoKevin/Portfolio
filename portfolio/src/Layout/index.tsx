import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#1a1625] text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
