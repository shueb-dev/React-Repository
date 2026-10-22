"use server";

import { redirect } from "next/navigation";
import { Content } from "next/font/google";
import { headers } from "next/headers";
import { API_URL } from "./Constants";
import { revalidatePath } from "next/cache";

export async function addNote(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");

  const notes = {
    title,
    description,
  };

  await fetch("http://localhost:8000/Note", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notes),
  });

  redirect("/");
}

export async function deleteNote(formData: FormData) {
  const id = formData.get("id");

  const new_url = API_URL + "/" + id;
  await fetch(new_url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  revalidatePath("/");
}
