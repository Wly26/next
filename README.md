# next
https://gitee.com/ifercarly/next-study

SQLite
Prisma

1.npm i prisma
2.npx prisma init --datasource-provider sqlite
3.编写模型 schema
4.根据模型生成数据库表
```bash
    npx prisma db push
```
5.根据模型生成 prisma client 用于操作数据库,src/db
```bash
    npx prisma generate
```

    关于缓存：

    revalidatePath(`/snippets/${id}`); // 重新验证
    redirect("/snippets/" + id);

    export const revalidate = 0;// 动态渲染
    export const dynamic = "force-dynamic";

    // 静态生成，可提前缓存
    export async function generateStaticParams() {
    const snippets = await db.snippet.findMany();
    return snippets.map((snippet) => ({
        id: snippet.id.toString(),
    }));
    }
