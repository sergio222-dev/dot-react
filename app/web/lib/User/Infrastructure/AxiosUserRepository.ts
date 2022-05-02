import { UserRepository } from "@lib/User/Domain/UserRepository";
import { User } from "@lib/User/Domain/User";
import { injectable } from "inversify";
import { Axios } from "@lib/Shared/Infrastructure/Axios";

@injectable()
export class AxiosUserRepository implements UserRepository {
  async Save(user: User) {
    await Axios.post("/create", {
      userId: user.id,
      userName: user.name,
      userPassword: user.password,
    });
    return;
  }
}
