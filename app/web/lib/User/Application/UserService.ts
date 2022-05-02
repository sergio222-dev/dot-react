import { UserRepository } from "../Domain/UserRepository";
import { User } from "@lib/User/Domain/User";
import { GUID } from "@lib/Shared/Utils/GUID";
import Types from "@lib/Shared/Infrastructure/DI/Types";
import { inject, injectable } from "inversify";

@injectable()
export class UserService {
  @inject<UserRepository>(Types.UserRepository)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private readonly _repository: UserRepository;

  // public constructor(
  //   @inject<UserRepository>(UserTypes.UserRepository) repository: UserRepository
  // ) {
  //   this._repository = repository;
  // }

  public async CreateUser(userName: string, userPassword: string): Promise<void> {
    const id = GUID();
    const user: User = User.CREATE(id, userName, userPassword);

    await this._repository.Save(user);
  }
}
