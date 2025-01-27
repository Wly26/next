import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {data} from '../../../public/data/routerIntercept'

export default function page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((data) => (
            <Link
              key={data.id}
              href={`/routerIntercept/photo/${data.id}`}
              className="group"
            >
              <Image
                alt={data.title}
                src={data.src}
                width={300}
                height={300}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{data.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {data.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
