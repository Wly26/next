"use client";
import { useState, useEffect } from "react";


function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.ceil(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // 这个接口比较慢
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = (await res.json()).slice(0, getRandomInt(1, 10));
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {data.map(({ title, id }: { title: string; id: number }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          location.reload;
        }}
      >
        刷新
      </button>
    </>
  );
}
