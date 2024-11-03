import { type Quiz } from "../quizzes/quiz/quiz.model";

export interface User  {
    id: string;
    avatar: string;
    name: string;
    solvedQuizIds: string[];
}