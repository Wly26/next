import SnippetDelButton from "@/components/snippet-del-button";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { parse } from "path";
// interface Props {
//   params: {
//     id: string;
//   };
// }
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
    <>
      <div className="flex items-center justify-between m-10">
        <h1 className="font-bold text-lg">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${id}/edit`}
            className="p-2 border border-teal-500 rounded"
          >
            Edit
          </Link>
          <SnippetDelButton id={+id} />
        </div>
      </div>
      <pre className="p-3 border rounded border-teal-500 bg-gray-200 mt-6">
        <code>{snippet.code}</code>
      </pre>
    </>
  );
}
// 静态生成，可提前缓存
export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => ({
    id: snippet.id.toString(),
  }));
}