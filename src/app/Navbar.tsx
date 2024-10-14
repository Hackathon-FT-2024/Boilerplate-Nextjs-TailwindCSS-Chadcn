import { Button } from "@/components/ui/button";
import Link from "next/link";


export const Navbar = () => {
  return (
    <header className="mx-auto container px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        🧬
        <span className="hidden lg:block ml-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          Beat The Bugs
        </span>
        <span className="block lg:hidden ml-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          Nextstep
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          className="text-sm hidden lg:block font-medium hover:underline underline-offset-4"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm hidden lg:block font-medium hover:underline underline-offset-4"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-sm hidden lg:block font-medium hover:underline underline-offset-4"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/auth/login"
        >
          <Button className="inline-flex items-center gap-2 justify-center rounded-md bg-gradient-to-r px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Login
          </Button>
        </Link>
      </nav>
    </header>
  );
};