"use client"
import { useState } from "react";

export default function template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [count, setCount] = useState(0);
    return (
      <div className="border-2 border-dashed border-black p-4  mx-auto mt-4">
        <h3>template</h3>
        <h2>Count: {count}</h2>
        <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
        {children}
      </div>
    );
  }