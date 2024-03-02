import React, { useState } from "react";
import {
  Container,
  Input,
  InputGroup,
  InputWrapper,
  LoginContainer,
  TogglePasswordVisibility,
} from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import { WrapperButton } from "../../components/WrapperButton/styles";
import { DynamicButton } from "../../components/DynamicButton";


export const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  //função para visualizar a senha no input
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //função para fazer o Login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(userName, password);
      navigate("/Historico");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocorreu um erro ao fazer login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <div className="div-logo">
          <img src="assets/erplogo.png" alt="Logo"style={{width:'600px'}}/>
        </div>
        <form onSubmit={handleLogin}>
          <InputGroup>
            <Input
              placeholder="Usuário"
              type="text"
              autoComplete="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputWrapper>
              <Input
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password" // Adicionar o atributo autocomplete
              />
              <TogglePasswordVisibility onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </TogglePasswordVisibility>
            </InputWrapper>
          </InputGroup>
          {error && (
            <div className="error-message-container">
              <p className="message">{error}</p>
            </div>
          )}
          <WrapperButton className="buttons">
            <DynamicButton
              className="button"
              text={"Entrar"}
              disabled={loading}
            />
            <DynamicButton
              disabled
              className="button"
              text={"Esqueci a senha"}
            />
          </WrapperButton>
        </form>
      </LoginContainer>
    </Container>
  );
};
