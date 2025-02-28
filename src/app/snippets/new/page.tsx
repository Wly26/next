import { db } from "@/db";
import { redirect } from "next/navigation";

export default function Page() {
    // 加入数据库
    async function addSnippet(formData: FormData) {
        "use server";
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;
        const snippet =await db.snippet.create({
            data: {
                title,
                code
            }
        })
        // 跳转到首页
        redirect('/')
    }
  return (
    <>
      <form action={addSnippet}>
        <h3 className="font-bold m-3 text-center">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          {/* title */}
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              className="border border-teal-500 p-2 rounded w-full"
              type="text"
              id="title"
              name="title"
            />
          </div>
          {/* code */}
          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <input
              className="border border-teal-500 p-2 rounded w-full"
              type="text"
              id="code"
              name="code"
            />
          </div>
          <button className="rounded p-2 bg-blue-200" type="submit">Create</button>
        </div>
      </form>
    </>
  );
}
