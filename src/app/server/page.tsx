import { addTodo, getTodo } from "@/actions";
import SubmitButton from "@/components/submit-button";
import SubmitForm from "@/components/submit-form";
// 传递一些新值
const userId = '888';

export default async function Home() {
  const todos = await getTodo();
  return (
    <div className="p-10">
      {/* 方案一：
      {/* <form action={addTodo}> *
      <form
        action={async (formData) => {
          "use server";
          await addTodo(userId, formData);
        }}
      >
        <input type="text" name="todo" className="border p-2" />
        <SubmitButton />
      </form>
      */}
      <hr />
      {/* 方案二： */}
      <SubmitForm />
      <ul className="leading-8 mt-4">
        {todos.map((todo: string, index: number) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
