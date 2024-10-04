import TopNav from "../topNav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <span>
      <TopNav />
      <main className="container mx-auto my-6">{children}</main>
    </span>
  );
}
