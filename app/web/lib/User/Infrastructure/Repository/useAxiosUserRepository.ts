import { useSetRecoilState } from "recoil";
import { User } from "@lib/User/Domain/User";
import { IUserMetaState, UserRepositoryType } from "@lib/User/Domain/UserRepository";
import { userMetaAtom } from "@lib/User/Infrastructure/State/UserAtom";
import { updateState } from "@lib/Shared/Utils/UpdateState";
import { Axios } from "@lib/Shared/Infrastructure/Axios";
import { GoAsync } from "@lib/Shared/Utils/AsyncCode";

const updateUserMetaState = (newValue: Partial<IUserMetaState>) => updateState<IUserMetaState>(newValue);

export const useAxiosUserRepository: UserRepositoryType = () => {
  const setUserMetaState = useSetRecoilState<IUserMetaState>(userMetaAtom);

  const Save = async (user: User) => {
    // Reset errors
    setUserMetaState(updateUserMetaState({ loading: true, errors: "" }));

    const [, err] = await GoAsync(
      Axios.post("/create", {
        userId: user.id,
        userName: user.name,
        userPassword: user.password,
      })
    );

    if (err) {
      setUserMetaState(updateUserMetaState({ errors: err.message, loading: false }));
      return;
    }

    setUserMetaState(updateUserMetaState({ loading: false, successfulRegistration: true }));
  };

  return {
    Save,
  };
};
