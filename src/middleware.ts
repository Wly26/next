import { NextRequest, NextResponse } from "next/server";
// 其实中间件相当于一个拦截器，拦截所有请求，然后进行一些处理，比如登录校验等
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}