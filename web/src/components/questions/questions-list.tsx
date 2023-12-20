"use client";
import { api } from "@/lib/axios";
import React, { FormEvent, useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Question } from "@/types/global";

interface QuestionsListProps {
  quizId: string;
}

const QuestionsList = ({ quizId }: QuestionsListProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  useEffect(() => {
    api
      .get(
        "https://the-trivia-api.com/v2/questions?categories=general_knowledge"
      )
      .then((response) => setQuestions(response.data));
  }, []);

  function handleSelectQuestion(question: Question) {
    const isQuestionAlreadySelected = selectedQuestions.includes(question);

    let updatedQuestions: Question[] = [];

    if (isQuestionAlreadySelected) {
      updatedQuestions = selectedQuestions.filter(
        ({ id }) => id !== question.id
      );
    } else {
      updatedQuestions = [...selectedQuestions, question];
    }

    setSelectedQuestions(updatedQuestions);
  }

  async function addSelectedQuestions(event: FormEvent) {
    event.preventDefault();

    await api.post(`/quiz/${quizId}/add`, { questions: selectedQuestions });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-1 font-semibold">
          <Plus className="w-4 h-4" />
          Search for new questions
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[55rem]">
        <DialogHeader>
          <DialogTitle>Separate new questions to your quiz!</DialogTitle>
          <DialogDescription>
            After adding, refresh the page and see.
          </DialogDescription>
        </DialogHeader>

        {/* questions list */}
        <form onSubmit={addSelectedQuestions}>
          <div className="flex flex-col overflow-y-auto h-80">
            {questions.map((question) => {
              return (
                <div key={question.id} className="p-3 border-b flex gap-3">
                  <Checkbox
                    onCheckedChange={() => handleSelectQuestion(question)}
                  />
                  <p className="text-[0.79rem] text-slate-500">
                    {question.question.text}
                  </p>
                </div>
              );
            })}
          </div>

          <Button type="submit" className="w-full mt-4 font-semibold">
            Add ({selectedQuestions.length})
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionsList;
