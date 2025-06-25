"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Topbar() {
  return (
    <div className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        Physics Formulas
      </Link>
<nav className="flex gap-4 items-center">
<Link href="/formulas">
          <Button variant="ghost">Formulas</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
      </nav>
    </div>
  );
}
