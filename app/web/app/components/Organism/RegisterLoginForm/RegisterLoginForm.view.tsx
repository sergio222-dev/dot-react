import Login from "@forms/Login";
import Register from "@forms/Register";
import CardForm from "@molecules/CardForm";
import { useRegisterLoginFormPresenter } from "./RegisterLoginForm.presenter";

export const RegisterLoginForm = () => {
  // PRESENTER
  const [models, operators] = useRegisterLoginFormPresenter();

  return (
    <CardForm title={models.title}>
      {models.isRegister && <Register goToLogin={operators.goToLogin} />}
      {models.isLogin && <Login goToRegisterForm={operators.goToRegister} />}
    </CardForm>
  );
};
