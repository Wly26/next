"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [count, setCount] = useState(0);
    const pathname = usePathname();
    return (
      <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-4">
        <div className="flex gap-4 font-bold text-lg mb-4">
            <Link className={pathname === "/layoutTemplate/about" ? "text-purple-500" : ""} href="/layoutTemplate/about">about</Link>
            <Link className={pathname === "/layoutTemplate/settings" ? "text-purple-500" : ""} href="/layoutTemplate/settings">settings</Link>
        </div>
        <h3>layout</h3>
        <h2>Count: {count}</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
        {children}
      </div>
    );
  }