import { Trash2 } from "lucide-react";
import React from "react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableCaption,
} from "../ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import ShareQuizForm from "./share-quiz-form";
import { api } from "@/lib/axios";
import { Quiz } from "@/types/global";
import QuestionsList from "../questions/questions-list";
import { Button } from "../ui/button";

interface QuizTableProps {
  quizId: string;
}

const QuizTable = async (props: QuizTableProps) => {
  const response = await api.get(`/quiz/${props.quizId}`);
  const quiz: Quiz = response.data.quiz;

  return (
    <Card className="rounded-md">
      <CardHeader className="p-3 border-b">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>{quiz.name}</CardTitle>
            <CardDescription className="text-xs">
              {quiz.description}
            </CardDescription>
          </div>

          <div className="space-x-4">
            {/* share quiz form */}
            <ShareQuizForm quizId={quiz.id} />

            <QuestionsList quizId={quiz.id} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* quiz table */}
        <Table>
          <TableCaption>
            <p className="p-2 italic text-slate-400 text-xs">
              Waiting for new questions here!
            </p>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left px-4">Statement</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Difficulty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quiz.trivias.map((trivia) => (
              <TableRow key={trivia.id}>
                <TableCell className="px-4 text-zinc-600">
                  {trivia.question.text}
                </TableCell>
                <TableCell>{trivia.category}</TableCell>
                <TableCell>{trivia.type}</TableCell>
                <TableCell>{trivia.difficulty}</TableCell>
                <TableCell>
                  <Button className="gap-1 bg-red-400 hover:bg-red-400/80 text-xs px-1.5">
                    <Trash2 className="w-3.5 h-3.5" />
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default QuizTable;
