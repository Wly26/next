'use client'
import React, { useEffect } from "react";

export default function Home() {
  const [list, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/todos");
      const data = await res.json();
      setData (data.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    const {data} = await res.json();
    console.log(data,'data');
    setData(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          className="border p-2"
        />
        <button type="submit" className="border p-2 ml-2">
          提交
        </button>
      </form>
      <ul className="leading-8 mt-4">
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}
