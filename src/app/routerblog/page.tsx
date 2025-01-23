"use client"
import React from 'react';
import Link from 'next/link';
import { Avatar, List } from 'antd';
import { data } from '../../../public/data/routerblogData';

export default function routerblog() {
  return (
    <div style={{ backgroundColor: "white" }}>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
            <List.Item key={item.id}>
                <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={<Link href={`/routerblog/${item.id}`}>{item.title}</Link>}
                />
            </List.Item>
            )}
        />
    </div>
  )
}
