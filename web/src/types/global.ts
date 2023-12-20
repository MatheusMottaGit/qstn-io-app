export type Question = {
  id?: string;
  question: { text: string };
  type: string;
  difficulty: string;
  category: string;
  correctAnswer: string;
  incorrectAnswers: IncorrectAnswer[];
};

export interface Quiz {
  id: string;
  name: string;
  description: string;
  created_at: string;
  trivias: Question[];
}

export interface IncorrectAnswer {
  id?: string;
  option: string;
}
