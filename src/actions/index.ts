'use server'

import { z } from "zod";
import { sleep } from "@/utils";
import { revalidatePath } from "next/cache";

const data = ["吃饭", "睡觉", "打豆豆"];

const schema = z.string().min(2,{message:"最少2个字符"}).max(10,{message:"最多10个字符"});
export async function getTodo() {
    return data
}

export async function addTodo(userId:string,formData: FormData) {
  await sleep(2000)// 模拟异步操作
  const todo = formData.get("todo") as string;
  data.push(todo);
  revalidatePath("/"); // 重新渲染页面
}

export async function addTodonew(prevState:{message: string}, formData: FormData) {
  await sleep(2000); // 模拟异步操作
  const todo = formData.get("todo") as string;
  const validatedFields = schema.safeParse(todo);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().formErrors.toString(),
    };
  }





  data.push(todo);
  revalidatePath("/"); // 重新渲染页面

  return {
    ...prevState,
    message: `add ${todo} success`,
  };
}