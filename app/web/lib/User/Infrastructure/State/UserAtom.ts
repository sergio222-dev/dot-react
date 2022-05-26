import {atom} from "recoil";
import {IUserMetaState} from "@lib/User/Domain/UserRepository";

export const userMetaAtom = atom<IUserMetaState>({
  key: "UserMetaAtom",
  default: {loading: false, errors: '', successfulRegistration: false},
  effects: [
    ({onSet, setSelf}) => {
      onSet(({successfulRegistration, ...rest}) => {
        if (!successfulRegistration) return;
        setTimeout(() => setSelf({
          ...rest,
          successfulRegistration: false,
        }), 5000);
      })
    },
  ]
})
