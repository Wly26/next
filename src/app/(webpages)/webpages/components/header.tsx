import React from 'react'
import Link from "next/link";

const linkData = [
  {
    name: "Performace",
    href: "/webpages/performace",
  },
  {
    name: "Reliabilty",
    href: "/webpages/reliabilty",
  },
  {
    name: "Scale",
    href: "/webpages/scale",
  },
];
export default function header() {
  return (
    <div className="absolute w-full z-10">
    <div className="flex justify-between container mx-auto p-8 text-red-500">
      <Link className="text-3xl font-bold" href="/webpages">Home</Link>
      <div className="text-xl space-x-4">
        {
            linkData.map((link) => (
                <Link key={link.name} href={link.href}>{link.name}</Link>
            ))
        }
      </div>
    </div>
  </div>
  )
}
