import React from "react";
import { Card } from "../ui/card";
import { ExternalLink, Trash2 } from "lucide-react";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import { Quiz } from "@/types/global";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

dayjs.locale(ptBr);

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard = (props: QuizCardProps) => {
  const createdAt = dayjs(props.quiz.created_at).format("D[  ]MMM[. ]YYYY");

  return (
    <Card
      key={props.quiz.id}
      className="w-full rounded-md p-2 space-y-3 flex flex-col justify-between h-48"
    >
      <Badge>categoria</Badge>

      <div className="space-y-1">
        <h1 className="font-semibold text-sm">{props.quiz.name}</h1>
        <p className="text-slate-400 text-xs">{createdAt}</p>
      </div>

      <p className="text-slate-600 text-sm">{props.quiz.description}</p>

      <div className="flex items-center gap-2">
        <Button
          variant={"outline"}
          className="border-main text-main font-semibold hover:bg-main hover:text-slate-200 gap-1 w-fit px-2"
        >
          <a
            href={`/roles/quizzes/${props.quiz.id}`}
            className="cursor-pointer"
          >
            Acess
          </a>
          <ExternalLink className="w-3 h-3" />
        </Button>

        {/* delete quiz button */}
        <Button className="font-semibold bg-red-500 hover:bg-red-600/70 gap-1 w-fit px-2">
          <Trash2 className="w-3 h-3" />
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default QuizCard;
