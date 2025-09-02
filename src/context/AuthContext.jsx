import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (data) => {
    setUser(data);
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
