import TopNav from "../topNav";
import BottomNav from "../bottomNav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNav />
      <main className="container mx-auto my-10 min-h-screen">{children}</main>
      <BottomNav />
    </>
  );
}
