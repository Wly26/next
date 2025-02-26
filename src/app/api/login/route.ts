import { NextRequest, NextResponse } from "next/server";
import db from "@/db";

// POST => /api/login
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
    const {login,password} = await request.json();

    // 调用后端接口
    // 这个接口是不行的，没有连接到服务器
    const res = await fetch("http://localhost:3000/api/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            login,
            password
        })
    }); 
    const data = await res.json();

    // BFF
    // 把拿到的 token 通过cookie 的形式种植到前端
    const response = NextResponse.json(
      {
          message: true,
          msg: "登录成功",
          data: data.data,
      },
      // {
      //   headers:{
      //     "Set-Cookie":`token=${data.data.token}; Path=/; Max-Age=86400; HttpOnly`
      //   }
      // }
    );

    response.cookies.set("token",data.data.token,{
      path:"/",
      maxAge:86400,
      httpOnly:true
    });

    return response;

}

