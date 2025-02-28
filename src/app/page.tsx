export const revalidate = 0;// 动态渲染
import Link from "next/link";
import { db } from "@/db";
export default async function Page() {
  const snippets = await db.snippet.findMany()
  return (
    <>
      <div className="flex items-center justify-between m-5">
        <h1 className="font-bold text-lg">Snippets</h1>
        <Link
          href="/snippets/new"
          className="p-2 border border-teal-500 rounded"
        >
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2 m-5">
        {/* <Link
          href="/snippets/1"
          className="flex items-center justify-between border border-teal-500 p-2 rounded"
        >
          <span> Function that</span>
          <span> View</span>
        </Link> */}
        {snippets.map((snippet) => (
          <Link
            href={`/snippets/${snippet.id}`}
            key={snippet.id}
            className="flex items-center justify-between border border-teal-500 p-2 rounded"
          >
            <span>{snippet.title}</span>
            <span>View</span>
          </Link>
        ))}
      </div>
    </>
  );
}
