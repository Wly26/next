'use server'

import { db } from "@/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: {
        id: id
    }
  })
  revalidatePath("/"); // 重新验证
  redirect("/")
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`); // 重新验证
  redirect("/snippets/" + id);
}