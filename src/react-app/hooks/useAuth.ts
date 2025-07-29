import { useState } from "react";

// Lista de usuários simples em memória
const USERS = [
  { username: "Pant", password: "171217Aa", role: "master" },
  { username: "MAD", password: "mad123", role: "client" }
];

export function useAuth() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("authUser");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (username: string, password: string) => {
    const foundUser = USERS.find(
      u =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password
    );

    if (!foundUser) {
      return { success: false, message: "Usuário ou senha incorretos" };
    }

    setUser(foundUser);
    localStorage.setItem("authUser", JSON.stringify(foundUser));
    return { success: true, role: foundUser.role };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return { user, login, logout };
}
