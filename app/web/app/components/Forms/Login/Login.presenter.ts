import { useRecoilValue } from "recoil";
import { IUserMetaState } from "@lib/User/Domain/UserRepository";
import { userMetaAtom } from "@lib/User/Infrastructure/State/UserAtom";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/router";

export const useLoginPresenter = () => {
  // STATE
  const userMetaState = useRecoilValue<IUserMetaState>(userMetaAtom);

  // SERVICE
  // const [service] = useUser();

  // REF
  const form = useRef<HTMLFormElement>(null);

  // NAVIGATION
  const router = useRouter();

  // HANDLERS
  const handleBackNavigation = () => router.push("/");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
  };

  return [
    {
      isLoading: userMetaState.loading,
      errors: userMetaState.errors,
      form,
    },
    {
      handleBackNavigation,
      handleLogin,
    },
  ];
};
