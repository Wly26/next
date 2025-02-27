import {headers} from "next/headers";
const { signal } = new AbortController();
const fetchImg = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    signal,// 会有不同的三张图片
    // cache:"no-store"//改默认状态
  });
  const data = await res.json();
  return data;
};

export default async function Page() {
  // await headers(); // 打包后，每次刷新会有新的数据，但是调用三次的数据是一样的
  const obj1 = await fetchImg();
  const obj2 = await fetchImg();
  const obj3 = await fetchImg();

  // await headers();// 使这个页面变成动态渲染，但是数据一样
  return (
    <div>
      <p>cache page</p>
      <img src={obj1.message} width={200} />
      <img src={obj2.message} width={200} />
      <img src={obj3.message} width={200} />
    </div>
  );
}
