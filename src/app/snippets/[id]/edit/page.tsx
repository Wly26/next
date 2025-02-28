import SnippetEditor from '@/components/snippet-editor';
import { db } from '@/db';
import React from 'react'
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const snippet = await db.snippet.findFirst({
    where: {id: parseInt(id)},
  });
  if(!snippet){
    return (
      <div>
        <h1>Not found</h1>
      </div>
    )
  }
  return (
    <div>
      <SnippetEditor snippet={snippet}></SnippetEditor>
    </div>
  );
}
