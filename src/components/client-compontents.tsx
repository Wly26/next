'use client'

import React from "react";

export default function ClientComponents({
    children
}:{
    children: React.ReactNode
}) {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <div>Client Components</div>
        <p>{count + 1}</p>
        <button onClick={handleClick}>Click</button>
        {children}
      </div>
    );
}