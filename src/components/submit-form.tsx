'use client'
import React from 'react'
import { useActionState } from "react";
import { addTodonew } from "@/actions";
import SubmitButton from "@/components/submit-button";

const initialState = {
  message: '',
};

export default function SubmitForm() {
  const [state, formAction] = useActionState(addTodonew, initialState);
  return (
    <div>
      <form action={formAction}>
        <input type="text" name="todo" className="border p-2" />
        <SubmitButton />
      </form>
      {state.message && <p className="text-green-500">{state.message}</p>}
    </div>
  );
}

