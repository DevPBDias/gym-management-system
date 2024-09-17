"use client";

import { LiaAmazon } from "react-icons/lia";
import {
  LoginBtn,
  LoginInput,
  ContainerField,
  ContainerForm,
  LoginLabel,
} from "./Styles";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <ContainerForm>
      <LiaAmazon style={{ color: "#faf9f9", width: 60, height: 60 }} />
      <ContainerField>
        <LoginLabel htmlFor="">E-mail</LoginLabel>
        <LoginInput type="text" />
      </ContainerField>
      <ContainerField>
        <LoginLabel htmlFor="">Senha</LoginLabel>
        <LoginInput type="text" />
      </ContainerField>
      <LoginBtn type="button" onClick={handleSubmit}>
        Entrar
      </LoginBtn>
    </ContainerForm>
  );
};

export default LoginForm;
