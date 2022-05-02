import { User } from "./User";

export interface UserRepository {
  Save(user: User): Promise<void>;
}
