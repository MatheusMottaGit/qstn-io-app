import QuizTable from "@/components/quiz/quiz-table";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const QuizPage = ({ params: { id } }: Props) => {
  return (
    <div className="w-full px-5 py-4 flex flex-col gap-6">
      <QuizTable quizId={id} />
    </div>
  );
};

export default QuizPage;
