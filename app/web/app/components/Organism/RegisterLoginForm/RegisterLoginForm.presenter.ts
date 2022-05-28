import { useMemo, useState } from "react";

const FORM_TYPES = {
  REGISTER: Symbol("Register"),
  LOGIN: Symbol("Login"),
};

interface Models {
  formSelected: symbol;
  isRegister: boolean;
  isLogin: boolean;
  title: string;
}

interface Operators {
  // createHandlerSelect: (formSelected: symbol) => () => void;
  goToLogin: () => void;
  goToRegister: () => void;
}

export const useRegisterLoginFormPresenter: () => [Models, Operators] = () => {
  // STATE
  const [formSelected, setFormSelected] = useState<symbol>(FORM_TYPES.LOGIN);
  const [title, setTitle] = useState("Login");

  const isRegister = useMemo(() => formSelected === FORM_TYPES.REGISTER, [formSelected]);
  const isLogin = useMemo(() => formSelected === FORM_TYPES.LOGIN, [formSelected]);

  // HANDLERS
  const createHandlerSelect = (formType: symbol) => () => {
    if (formType === FORM_TYPES.LOGIN) setTitle("Login");
    if (formType === FORM_TYPES.REGISTER) setTitle("Register");
    setFormSelected(formType);
  };

  return [
    {
      formSelected,
      isRegister,
      isLogin,
      title,
    },
    {
      goToLogin: createHandlerSelect(FORM_TYPES.LOGIN),
      goToRegister: createHandlerSelect(FORM_TYPES.REGISTER),
    },
  ];
};
