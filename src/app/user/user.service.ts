import { Injectable } from "@angular/core";
import { type User } from "./user.model";
import { type Quiz } from "../quizzes/quiz/quiz.model";

@Injectable({ providedIn: 'root'})
export class UserService {
    private users: User[] = [
        {
          id: 'u1',
          name: 'Jasmine Washington',
          avatar: 'user-1.jpg',
          solvedQuizIds: []
        },
        {
          id: 'u2',
          name: 'Emily Thompson',
          avatar: 'user-2.jpg',
          solvedQuizIds: []
        },
        {
          id: 'u3',
          name: 'Marcus Johnson',
          avatar: 'user-3.jpg',
          solvedQuizIds: []
        }
      ];

      getUsers(): User[] {
        return this.users;
      }

      getUserById(userId: string): User | undefined {
        return this.users.find((user) => user.id === userId);
      }

      isQuizSolvedByUser(userId: string, quizId: string): boolean {
        const user = this.getUserById(userId);
        return user ? user.solvedQuizIds.includes(quizId) : false;
      }
}