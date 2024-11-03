import { Injectable } from "@angular/core";
import { type Quiz } from "./quiz/quiz.model";
import { UserService } from "../user/user.service";


@Injectable({ providedIn: "root" })
export class QuizzesService {
    private quizzes: Quiz[] = [
        { id: '1', question: 'Which country is known as the "Land of Fire and Ice"?', options: ['Iceland', 'Norway', 'Finland'], correctAnswerIndex: 0 },
        { id: '2', question: 'Which European country has a city called "Venice" famous for its canals?', options: ['Spain', 'France', 'Italy'], correctAnswerIndex: 2 },
        { id: '3', question: 'Which country shares the longest border with Germany?', options: ['Poland', 'France', 'Austria'], correctAnswerIndex: 1 },
        { id: '4', question: 'Which country is famous for its tulips and windmills?', options: ['Belgium', 'Netherlands', 'Denmark'], correctAnswerIndex: 1 },
        { id: '5', question: 'What is the largest country entirely in Europe by area?', options: ['Ukraine', 'France', 'Spain'], correctAnswerIndex: 0 },
        { id: '6', question: 'Which European country is known for its ancient ruins and is considered the cradle of Western civilization?', options: ['Italy', 'Greece', 'Portugal'], correctAnswerIndex: 1 },
        { id: '7', question: 'Which country is home to the city of "Budapest"?', options: ['Hungary', 'Romania', 'Slovakia'], correctAnswerIndex: 0 },
        { id: '8', question: 'Which country has both "Scotland" and "Wales" as part of its territories?', options: ['United Kingdom', 'Ireland', 'France'], correctAnswerIndex: 0 },
        { id: '9', question: 'Which country is known for the Eiffel Tower and its capital, Paris?', options: ['Spain', 'Belgium', 'France'], correctAnswerIndex: 2 },
        { id: '10', question: 'Which country in Europe is famous for its chocolate and watches, and has a city called Zurich?', options: ['Austria', 'Switzerland', 'Germany'], correctAnswerIndex: 1 }
    ]

    constructor(private userService: UserService) { }

    getOpenQuizzesByUserId(userId: string): Quiz[] {
        return this.quizzes.filter(
            (quiz) => !this.userService.isQuizSolvedByUser(userId, quiz.id)
        );
    }
}