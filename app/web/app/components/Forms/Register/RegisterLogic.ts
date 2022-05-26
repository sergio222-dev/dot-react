import {FormEvent, useRef} from "react";
import {useRouter} from "next/router";
import {useRecoilValue} from "recoil";
import {userMetaAtom} from "@lib/User/Infrastructure/State/UserAtom";
import {IUserMetaState} from "@lib/User/Domain/UserRepository";
import {useUser} from "@lib/User/Presentation/useUser";

// UI LOGIC
export const useRegisterForm = () => {
  // STATE
  // const [successfulRegistration, setSuccessfulRegistration] = useState(false);
  const userMetaState = useRecoilValue<IUserMetaState>(userMetaAtom);

  // PRESENTER
  const [service] = useUser();

  // REF
  const form = useRef<HTMLFormElement>(null);

  // NAVIGATION
  const router = useRouter();

  // HANDLERS
  const handleBackNavigation = () => router.push("/");

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const data = new FormData(form.current);

    await service.RegisterUser({
      userName: data.get("UserName") as string,
      userPassword: data.get("UserPassword") as string,
    });
  };


  return [
    {
      successfulRegistration: userMetaState.successfulRegistration,
      isLoading: userMetaState.loading,
      errors: userMetaState.errors,
      form,
    }, // model
    {
      handleBackNavigation,
      handleRegistration,
    }// operators
  ]
}
