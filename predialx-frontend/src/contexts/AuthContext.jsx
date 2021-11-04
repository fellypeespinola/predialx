import { createContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [usuario, setUsuario] = useState(null);

  async function checkAuth() {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('AUTH_TOKEN');

      if (!token) return

      api.defaults.headers.common["Authorization"] = token;

      api
        .get(`auth/login/check`)
        .then(response => {

          const { id, name, email } = response.data.data;

          setUsuario({
            id,
            name,
            email,
          });

          resolve();

        }).catch(err => {
          reject(err);
        })
    });
  }

  async function signInWithEmail(email, password) {
    return new Promise((resolve, reject) => {
      api
        .post(`auth/login`, { email, password })
        .then(response => {
          const token = `Bearer ${response.data.token}`;
          api.defaults.headers.common["Authorization"] = token;
          localStorage.setItem('AUTH_TOKEN', token);

          const { id, name, email } = response.data.data;

          setUsuario({
            id,
            name,
            email,
          });

          resolve(response.data);
        })
        .catch(error => reject(error.response.data));
    });
  }

  async function signOut() {
    return new Promise((resolve, reject) => {
      api.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem('AUTH_TOKEN');
      setUsuario(null);
      resolve();
    });
  }

  return (
    <AuthContext.Provider value={{ usuario, signInWithEmail, checkAuth, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
