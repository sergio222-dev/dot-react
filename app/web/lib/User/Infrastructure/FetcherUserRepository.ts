import { injectable } from "inversify";
import { UserRepository } from "@lib/User/Domain/UserRepository";
import { fetcher } from "@lib/Shared/Infrastructure/Fetch";
import { User } from "@lib/User/Domain/User";

@injectable()
export class FetcherUserRepository implements UserRepository {
  async Save(user: User) {
    await fetcher.post("/create", {
      userId: user.id,
      userName: user.name,
      userPassword: user.password,
    });
  }
}
