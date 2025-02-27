import { sleep } from '@/utils'
export const dynamic = "force-dynamic"; // 动态渲染
export default async function page() {
  await sleep(3000)
  return (
    <div>
      新闻:{new Date().toLocaleString()}
    </div>
  )
}
