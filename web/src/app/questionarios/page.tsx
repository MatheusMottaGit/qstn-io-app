import PagesHeader from "@/components/pages-header";
import CreateQuizForm from "@/components/quiz/create-quiz-form";
import QuizCards from "@/components/quiz/quiz-cards";
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
import { Plus } from "lucide-react";
import React from "react";

const Quizzes = () => {
  return (
    <main className="flex-1 py-5 px-4 flex flex-col gap-9">
      <PagesHeader pageTitle="Questionários" />

      <div className="flex items-center space-x-3">
        {/* filter quiz form */}
        <Input
          placeholder="Filtrar questionários..."
          className="text-xs bg-white/40 w-44 h-8"
        />

        {/* create quiz form button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-1 text-xs h-8 bg-main">
              <Plus className="w-4 h-4" />
              Criar novo questionário
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar um novo questionário!</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </DialogDescription>
            </DialogHeader>

            {/* create quiz form */}
            <CreateQuizForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* quizzes list */}
      <QuizCards />
    </main>
  );
};

export default Quizzes;
