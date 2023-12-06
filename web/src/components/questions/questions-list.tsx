import { api } from "@/lib/axios";
import { Question } from "@/types/question";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { BookDownIcon } from "lucide-react";

// interface QuestionsListProps {
//   quizId: string;
//   category: string;
//   difficulty: string;
// }

const QuestionsList = async () => {
  const response = await api.get(
    `https://opentdb.com/api.php?amount=15&category=23&difficulty=hard`
  );
  const questions: Question[] = response.data.results;

  console.log(questions);

  return (
    <Card className="rounded-md">
      <CardHeader className="p-4 border-b">
        <CardTitle className="flex justify-between">
          Adicionar questões <BookDownIcon className="text-slate-500" />
        </CardTitle>
        <CardDescription>
          As seguintes perguntas foram baseadas nas propriedades do seu quiz.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap pt-2 max-h-[236px] w-full overflow-y-auto">
          {questions.map((question) => {
            return (
              <div
                key={question.question}
                className="border-b p-2 w-full cursor-pointer flex items-center gap-2"
              >
                <div>
                  <Checkbox id="accept" />
                  <label htmlFor="accept"></label>
                </div>

                <p className="text-sm text-zinc-600">{question.question}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionsList;
