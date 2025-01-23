import React from 'react'
import Image from 'next/image'
import type { Metadata, ResolvingMetadata } from 'next'

import { data } from '../../../../../public/data/routerblogData';

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const id = (await params).id
    return {
      title: 'photo' + id,
    }
  }
export default async function photo({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    const item = data.find(item => item.id === +id)!
    return (
        <div className='contaqiner mx-auto pt-8'>
            <Image src='https://picsum.photos/200/300' alt={item.title} width={500} height={500} />
            <div>
                <p>{item.title}</p>
            </div>
        </div>
    )
}
