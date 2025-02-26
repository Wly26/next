import { NextResponse } from "next/server";
import db from "@/db";

// apipost中，访问地址：http://localhost:3000/api/articles，发请求：
interface IParams {
    id: string;
}

// apipost中，访问地址：http://localhost:3000/api/articles，发请求：
// http://localhost:3000/api/articles/znbdrdkw
// DELETE => /api/articles/:id
export async function DELETE(request: Request, { params }: { params: IParams}) {
    await db.update(({ posts }) =>{
        // 删除后，posts中删除id为params.id的项
        const idx = posts.findIndex((post) => post.id === params.id);
        posts.splice(idx, 1);
    });
    return NextResponse.json({
        code: 200,
        message: "删除成功",
    });
}

// apipost中，访问地址：http://localhost:3000/api/articles，发请求：
// http://localhost:3000/api/articles/8hqqqkyo
// body中的json格式
// {
//     "title":"555",
//     "content":"666"
// }
// PATCH => /api/articles/:id
export async function PATCH(request: Request, { params }: { params: IParams }) {
    const data = await request.json();
    let idx = -1;
    await db.update(({ posts }) => {
      // 删除后，posts中删除id为params.id的项
      idx = posts.findIndex((post) => post.id === params.id);
      posts[idx] = { ...posts[idx], ...data };
    });
    return NextResponse.json({
      code: 200,
      message: "修改成功",
      data: db.data.posts[idx],
    });
}

// apipost中，访问地址：http://localhost:3000/api/articles，发请求：
// http://localhost:3000/api/articles/znbdrdkw
// GET => /api/articles/:id
export async function GET(request: Request, { params }: { params: IParams }) {
  const data = db.data.posts.find((post) => post.id === params.id);
  return NextResponse.json({
    code: 200,
    message: "查询成功",
    data
  });
}

