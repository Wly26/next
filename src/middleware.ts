import { NextRequest, NextResponse } from "next/server";
// 其实中间件相当于一个拦截器，拦截所有请求，然后进行一些处理，比如登录校验等
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  // if (pathname === "/") {
  //   // 路由重定向
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}
// 以下路径会执行中间件
export const config = {
  matcher: ["/", "/login", "/register", "/routerblog", "/routerblog/:id"],
};