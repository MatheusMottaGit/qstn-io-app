import { api } from "@/lib/axios";
import React from "react";
import { Card } from "../ui/card";
import { BookOpenText } from "lucide-react";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import { Quiz } from "@/types/quiz";

dayjs.locale(ptBr);

const QuizCards = async () => {
  const response = await api.get("/quiz/all");
  const quizzes: Quiz[] = response.data;

  return (
    <>
      {quizzes.map((quiz) => {
        const createdAt = dayjs(quiz.created_at).format("D[  ]MMM[. ]YYYY");

        return (
          <div key={quiz.id} className="space-y-2">
            <p className="font-semibold text-xs text-zinc-400">{createdAt}</p>
            <Card className="w-44 px-2 py-1.5 rounded-sm flex items-center justify-between">
              {/* left */}
              <div className="space-y-0.5">
                <a
                  href={`/questionarios/${quiz.id}`}
                  className="text-sm font-semibold hover:underline hover:opacity-50"
                >
                  {quiz.name}
                </a>
                <p className="text-xs text-zinc-400">
                  {quiz.description.substring(0, 15).concat("...")}
                </p>
              </div>

              {/* right */}
              <div className="bg-main p-1 w-6 h-6 rounded-sm flex items-center justify-center text-slate-50">
                <BookOpenText />
              </div>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default QuizCards;
