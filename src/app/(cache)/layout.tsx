"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic"; // 动态渲染
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <div>
      <nav>
        {/* <Link href="/news">新闻</Link>
        <Link href="/sports">体育</Link> */}
        <span onClick={() => router.push("/news")}>新闻</span>
        <span onClick={() => router.push("/sports")}>体育</span>
      </nav>
      {children}
    </div>
  );
}
