import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'

import { Card } from 'antd';
import { data } from '../../../../public/data/routerblogData';

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
      title: 'generateMetadata' + id,
    }
  }

export default async function routerblog({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    const item = data.find(item => item.id === +id)
    return (
        <Card title={item?.title} style={{ width: 300 }}>
            <p>{item?.title}</p>
        </Card>
    )
}
