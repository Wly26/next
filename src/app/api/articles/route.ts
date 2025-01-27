import { NextRequest, NextResponse } from "next/server";
import db from "@/db";

// GET => /api/articles
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const pagenum = Number(searchParams.get("pagenum")) || 1
    const pagesize = Number(searchParams.get("pagesize")) || 10
    const query = searchParams.get("query") || "";

    const data = db.data.posts;

    let fileteredData = query ? data.filter(item =>{
        const { id, ...rest } = item;
        return Object.values(rest).some((value) =>
          String(value).toLowerCase().includes(query.toLowerCase()))
    }) : data;

    const total = fileteredData.length;
    const startInddex = (pagenum - 1) * pagesize;
    const endIndex = Math.min(startInddex + pagesize, total);

    fileteredData = startInddex >= total ? [] : fileteredData.slice(startInddex, endIndex);

  return NextResponse.json({
    code: 200,
    message: "分页查询成功",
    data:{
        total,
        list: fileteredData
    }
  });
}

// POST => /api/articles
// 发送数据：json格式
// {
//     "hello":"world"
// }
// 返回数据：json格式
// {
// 	"code": 200,
// 	"message": "Hello World",
// 	"data": {
// 		"hello": "world"
// 	}
// }
// 保存在db.json中
export async function POST(request: Request) {
    const data = await request.json();
    await db.update(({ posts }) => posts.push({
        id:Math.random().toString(36).slice(-8),
        ...data
    }));
    return NextResponse.json({
        code: 200, 
        message: "添加成功",
        data
    });
}

