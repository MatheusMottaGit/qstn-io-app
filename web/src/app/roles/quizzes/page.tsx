"use client";
import CreateQuizForm from "@/components/quiz/create-quiz-form";
import QuizCard from "@/components/quiz/quiz-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/axios";
import { Quiz } from "@/types/global";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [searchedQuiz, setSearchedQuiz] = useState("");

  useEffect(() => {
    api.get("/quiz/all").then((response) => setQuizzes(response.data));
  }, []);

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.name.toLowerCase().includes(searchedQuiz)
  );

  return (
    <main className="flex-1 py-5 px-4 flex flex-col gap-7">
      <div className="flex items-center justify-between space-x-3">
        <h1 className="font-semibold text-lg">Quizzes</h1>

        <div className="flex items-center gap-4">
          {/* create quiz form button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-1 text-xs h-8 bg-main">
                <Plus className="w-4 h-4" />
                New quiz
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Commit a new quiz!</DialogTitle>
                <DialogDescription>
                  Refresh the page after creating it.
                </DialogDescription>
              </DialogHeader>

              {/* create quiz form */}
              <CreateQuizForm />
            </DialogContent>
          </Dialog>

          {/* filter quiz form */}
          <Input
            onChange={(e) => setSearchedQuiz(e.target.value)}
            placeholder="Search content..."
            className="text-xs bg-white w-44 h-8"
          />
        </div>
      </div>

      {/* quizzes list */}
      <div className="grid grid-cols-5 gap-3 place-items-center">
        {filteredQuizzes.length > 0 ? (
          <>
            {filteredQuizzes.map((filtered) => (
              <QuizCard quiz={filtered} key={filtered.id} />
            ))}
          </>
        ) : (
          <>
            {quizzes.map((quiz) => (
              <QuizCard quiz={quiz} key={quiz.id} />
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default Quizzes;
