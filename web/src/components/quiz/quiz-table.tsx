import { Question } from "@/types/question";
import { X } from "lucide-react";
import React from "react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../ui/table";
import { Quiz } from "@/types/quiz";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import ShareQuizForm from "./share-quiz-form";
import { api } from "@/lib/axios";

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
            <CardDescription>{quiz.description}</CardDescription>
          </div>

          {/* share quiz form */}
          <ShareQuizForm quizId={quiz.id} />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* quiz table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left px-4">Enunciado</TableHead>
              <TableHead className="w-[100px] px-4">ID</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Dificuldade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quiz.questions.map((question: Question) => (
              <TableRow key={question.question}>
                <TableCell className="px-4 text-zinc-400">
                  {question.question}
                </TableCell>
                <TableCell className="font-medium px-4">1</TableCell>
                <TableCell>{question.category}</TableCell>
                <TableCell>{question.type}</TableCell>
                <TableCell>{question.difficulty}</TableCell>
                <TableCell>
                  <div className="w-4 h-4 bg-red-400 flex items-center justify-center p-0.5 text-white/80 rounded-sm">
                    <X />
                  </div>
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
