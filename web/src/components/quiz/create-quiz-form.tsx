import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import { createQuiz } from "@/utils/server-actions/create-quiz-action";

const CreateQuizForm = () => {
  return (
    <form action={createQuiz} className="grid grid-cols-2 gap-3">
      <div className="space-y-1">
        <Label>Name</Label>
        <Input name="name" placeholder="A name for your quiz..." />
      </div>

      <div className="space-y-1">
        <Label>Description</Label>
        <Input name="description" placeholder="A brief description..." />
      </div>

      <Button type="submit" className="col-span-2 bg-main gap-1 font-bold">
        Create
        <CheckCircle2 className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default CreateQuizForm;
