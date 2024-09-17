import { LiaAmazon } from "react-icons/lia";
import {
  LoginBtn,
  LoginInput,
  ContainerField,
  ContainerForm,
  LoginLabel,
} from "./Styles";

const LoginForm = () => {
  return (
    <ContainerForm>
      <LiaAmazon style={{ color: "#DD0426", width: 60, height: 60 }} />
      <ContainerField>
        <LoginLabel htmlFor="">E-mail</LoginLabel>
        <LoginInput type="text" />
      </ContainerField>
      <ContainerField>
        <LoginLabel htmlFor="">Senha</LoginLabel>
        <LoginInput type="text" />
      </ContainerField>
      <LoginBtn type="button">Entrar</LoginBtn>
    </ContainerForm>
  );
};

export default LoginForm;
