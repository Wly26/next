"use client"
import { deleteSnippet } from '@/actions';
import React,{startTransition} from 'react'

export default function SnippetDelButton(props:{id:number}) {
    const handleDelete = () => {
        startTransition(async () => {
            deleteSnippet(props.id);
        })
    };
  return (
    <div>
      <button onClick={handleDelete} className="p-2 border border-red-500 rounded">Delete</button>
    </div>
  );
}
