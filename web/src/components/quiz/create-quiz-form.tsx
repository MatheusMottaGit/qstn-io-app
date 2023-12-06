import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

const CreateQuizForm = () => {
  return (
    <form className="grid grid-cols-2 gap-3">
      <div className="space-y-1">
        <Label>Nome</Label>
        <Input placeholder="Um nome para seu quiz..." />
      </div>

      <div className="space-y-1">
        <Label>Descrição</Label>
        <Input placeholder="Uma breve descrição..." />
      </div>

      <Button className="col-span-2 bg-main gap-1 font-bold">
        Criar
        <CheckCircle2 className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default CreateQuizForm;
