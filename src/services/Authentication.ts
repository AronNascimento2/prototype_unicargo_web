export interface AuthResponse {
  success: boolean;
  message?: string;
}

export const authenticate = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  try {
    // Simulação de uma requisição assíncrona
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Verificação de credenciais (simulação)
    if (username === "mockUser" && password === "1234") {
      return { success: true };
    } else {
      throw new Error("Credenciais inválidas");
    }
  } catch (error: any) {
    throw new Error(error.message || "Erro ao autenticar");
  }
};
