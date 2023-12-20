import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Copy, Share2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface ShareProps {
  quizId: string;
}

const ShareQuizForm = (props: ShareProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="w-fit gap-1">
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Compartilhe com as pessoas!</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>

        {/*quiz id copy clipboard form*/}
        <div className="flex gap-2">
          <Input value={props.quizId} className="text-slate-400 font-medium" />

          <Button className="gap-1">
            Copiar
            <Copy className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareQuizForm;
