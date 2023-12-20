// create quiz server action
"use server";
import { api } from "@/lib/axios";
import { revalidatePath } from "next/cache";

export async function createQuiz(formData: FormData) {
  const createQuizProps = {
    name: formData.get("name"),
    description: formData.get("description"),
  };

  console.log(createQuizProps);

  await api.post("/quiz/create", { createQuizProps });

  revalidatePath("/roles/quizzes");
}
