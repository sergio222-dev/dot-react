export class User {
  private readonly _id;
  private readonly _name;
  private readonly _password;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get password() {
    return this._password;
  }

  private constructor(id: string, name: string, password: string) {
    this._id = id;
    this._name = name;
    this._password = password;
  }

  public static CREATE(id: string, name: string, password = ""): User {
    return new User(id, name, password);
  }
}
