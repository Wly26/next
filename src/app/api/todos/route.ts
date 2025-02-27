import { NextResponse } from "next/server";

const data = ["吃饭", "睡觉", "打豆豆"];

export async function GET() {
  return NextResponse.json({
    code: 200,
    message: "查询成功",
    data
  });
}

export async function POST(request: Request) {
  const fromData = await request.formData();
  const todo = fromData.get("todo") as string;
  data.push(todo);
  return NextResponse.json({
      code: 200,
      message: "添加成功",
      data
  });
}
