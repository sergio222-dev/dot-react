import { User } from "./User";

export interface IUserMetaState {
  loading: boolean;
  errors: string;
  successfulRegistration: boolean;
}

export interface UserRepositoryActions {
  Save: (user: User) => Promise<void>
}

export type UserRepositoryType = () => UserRepositoryActions;
