import PagesHeader from "@/components/pages-header";
import QuestionsList from "@/components/questions/questions-list";
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
      <PagesHeader pageTitle="Questionários" />

      <QuizTable quizId={id} />

      {/* questions list for adding */}
      <QuestionsList />
    </div>
  );
};

export default QuizPage;
