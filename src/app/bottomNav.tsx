"use client";

import Link from "next/link";

export default function BottomNav() {
  return (
    <div className="container max-w-7xl mx-auto my-auto py-5 flex flex-col items-center justify-between sm:gap-4 h-28 sm:flex-row border-t">
      <div className="mx-auto text-balance text-center text-md leading-loose text-muted-foreground grid grid-cols-3 gap-x-10">
        <Link className="hover:underline" href="/">
          Footer
        </Link>
        <Link className="hover:underline" href="/">
          Footer
        </Link>
        <Link className="hover:underline" href="/">
          Footer
        </Link>
      </div>
      <p className="mx-auto">Copyright Footer 2024</p>
    </div>
  );
}
