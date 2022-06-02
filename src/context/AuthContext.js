import { useState, createContext } from 'react';

const AuthContext = createContext({ auth: "auth" });

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  let value = { user, setUser };

  return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}

const authContext = {
  context: AuthContext,
  provider: AuthProvider
}

export default authContext;
