import React from 'react'
import { notFound } from 'next/navigation';

export default function Page() {
    notFound();
    return <div>Page</div>;
  }